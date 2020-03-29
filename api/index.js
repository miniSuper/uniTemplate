import { request } from "../utils/index.js";

const assignParams = (uniqueParams, API_PARAMS) => {
  const DEFAULT_PARAMS = {
    url: "",
    method: "",
    data: {},
    params: {},
    loading: false,
    fullScreenLoading: false
  };
  return Object.assign({}, DEFAULT_PARAMS, uniqueParams, API_PARAMS);
};

/** ***********  数据页 start   *************/

export const apiNewsList = uniqueParams => {
  const API_PARAMS = {
    url: "https://unidemo.dcloud.net.cn/api/news",
    method: "get"
  };
  return request(assignParams(uniqueParams, API_PARAMS));
};

/** ***********  数据页 end    *************/
