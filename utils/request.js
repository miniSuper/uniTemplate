import store from "../store";

export const request = ({
  url,
  method,
  data = {},
  params = {},
  loading = false
}) => {
  if (Object.keys(params).length !== 0) {
    let queryStr = "";
    Object.keys(params).forEach(key => {
      queryStr += `&${key}=${params[key]}`;
    });
    url += url.includes("?") ? "" : "?";
    url += queryStr;
  }
  if (loading) {
    uni.showLoading({
      title: "加载中"
    });
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url,
      method,
      data,
      success(response) {
        uni.hideLoading();
        resolve(response);
        // if (response.data.result == true) {
        //   resolve(response);
        // } else if (res.data.code === 501 || res.data.code === 507) {
        //   store.commit("logout");
        //   //登入过期，重新登入
        //   app.login().catch(err => {
        //     //登入失败，进入登入页面
        //     wx.navigateTo({
        //       url: "/pagesApp/login/login"
        //     });
        //   });
        // } else {
        //   //提示错误信息
        //   if (res.data.code == 508) {
        //     store.commit("logout");
        //     app.login().catch(err => {
        //       //登入失败，进入登入页面
        //       wx.navigateTo({
        //         url: "/pagesApp/login/login"
        //       });
        //     });
        //   } else {
        //     app.msg(res.data.message);
        //   }
        // }
      },
      fail(error) {
        uni.hideLoading();
        reject(error);
      }
    });
  });
};
