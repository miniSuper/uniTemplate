import Vue from "vue";
import App from "./App";
import "./assets/styles/app.scss";

import AppPublic from "./components/public/AppPublic";
Vue.component("AppPublic", AppPublic);

Vue.config.productionTip = false;
App.mpType = "app";

const globalData = {}; //临时数据  刷新浏览器就没了  类似vuex
const publicViewData = [];

Object.defineProperty(Vue.prototype, "$app", {
  get() {
    const vm = this.$root || this; //获取调用vue实例
    return {
      setGlobalData() {},

      getFromGlobalData() {},

      setPublicViewData() {},

      getPublicViewData() {
        return {
          viewList: []
        };
      },

      delPublicViewData() {},

      toast(title) {
        uni.showToast({
          title,
          position: "top",
          icon: "none"
        });
      },

      saveImgToLocalAlbum(url) {
        uni.showLoading({
          title: "下载中..."
        });
        uni.downloadFile({
          url: url,
          success(res) {
            uni.hideLoading();
            uni.showLoading({
              title: "保存中..."
            });
            uni.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success() {
                uni.hideLoading();
                uni.showToast({
                  title: "保存成功",
                  duration: 2000
                });
              },
              fail() {
                uni.hideLoading();
                uni.showToast({
                  title: "保存失败",
                  duration: 2000
                });
              }
            });
          },
          fail() {
            uni.hideLoading();
            uni.showToast({
              title: "下载失败",
              duration: 2000
            });
          }
        });
      },

      saveTempFile(tempFilePath, url) {
        const that = this;
        return new Promise((resolve, reject) => {
          uni.saveFile({
            tempFilePath,
            success(res) {
              if (url) {
                if (!globalData.tempFileList) globalData.tempFileList = {};
                globalData.tempFileList[url] = res.savedFilePath;
              }
              return resolve(res.savedFilePath);
            },
            fail(err) {
              return reject(err);
            }
          });
        });
      },

      showPublicView(contentData) {
        if (!vm.publicViewData) {
          console.log(
            '请在data中设置公用数据publicViewData:this.$app.getPublicViewData()，并引入<app-public :publicViewData="publicViewData"></app-public>组件'
          );
          return false;
        }
        const viewList = vm.publicViewData.viewList;
        let topIndex = viewList.length; //视图堆栈中最上面那个视图的index
        if (contentData.autoClose) {
          setTimeout(() => {
            this.closePublicView(topIndex);
          }, contentData.autoClose);
        }
        // 标记为弹窗
        if (contentData.isPopupType) {
          contentData.width = this.convertUnit(contentData.width);
          contentData.height = this.convertUnit(contentData.height);
        }
        contentData.viewId = contentData.viewType + "-" + topIndex;
        viewList.push(contentData);
        console.log("after viewList", viewList);
      },

      getOneTempFilePath(url) {
        //这个函数不要在页面中调用   直接调用 getTempFilePaths 因为这里没有loading处理
        if (!globalData.tempFileList) globalData.tempFileList = {};
        let cacheFileList = globalData.tempFileList;
        return new Promise((resolve, reject) => {
          if (cacheFileList[url]) {
            return resolve(cacheFileList[url]);
          }
          if (url.indexOf("//tmp") !== -1) {
            // 已经下载过了
            return this.saveTempFile(url);
          } else {
            const that = this;
            uni.downloadFile({
              url: url,
              header: { Authorization: uni.getStorageSync("Authorization") },
              success(res) {
                resolve(that.saveTempFile(res.tempFilePath, url));
              },
              fail(err) {
                reject(err);
              }
            });
          }
        });
      },

      getTempFilePaths(fileList = []) {
        const tempPaths = [];
        let successNum = 0;
        let failNum = 0;
        uni.showLoading("下载中...");
        return new Promise((resolve, reject) => {
          fileList.forEach(async (item, index) => {
            try {
              const path = await this.getOneTempFilePath(item);
              successNum++;
              tempPaths[index] = path;
              if (successNum >= fileList.length) {
                uni.hideLoading();
                resolve(tempPaths);
              }
            } catch (error) {
              failNum++;
              // 由于我们设置了一个全局对象 globalData 可以保存临时图片的地址  所以  比如你保存5张图片  一张失败了 不需要马上返回  接着执行  成功的会保存 失败的让用户再次点击操作即可
            }
            if (failNum >= 1) {
              this.toast(failNum + "张图片保存失败");
              uni.hideLoading();
              reject(tempPaths);
            }
          });
        });
      }
    };
  }
});

const app = new Vue({
  ...App
});
app.$mount();
