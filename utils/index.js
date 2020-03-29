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
      },
      fail(error) {
        uni.hideLoading();
        reject(error);
      }
    });
  });
};
