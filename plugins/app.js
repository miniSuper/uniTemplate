const install = Vue => {
  const app = {
    globalData: {}, //临时数据  刷新浏览器就没了  类似vuex

    setGlobalData() {},

    getFromGlobalData() {},

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
              if (!that.globalData.tempFileList)
                that.globalData.tempFileList = {};
              that.globalData.tempFileList[url] = res.savedFilePath;
            }
            return resolve(res.savedFilePath);
          },
          fail(err) {
            return reject(err);
          }
        });
      });
    },

    getOneTempFilePath(url) {
      //这个函数不要在页面中调用   直接调用 getTempFilePaths 因为这里没有loading处理
      if (!this.globalData.tempFileList) this.globalData.tempFileList = {};
      let cacheFileList = this.globalData.tempFileList;
      return new Promise((resolve, reject) => {
        if (cacheFileList[url]) {
          console.log("在缓存中找到 给你");
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

  Vue.prototype.$app = app;
};

export default install;
