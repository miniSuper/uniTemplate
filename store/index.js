import Vue from "vue";
import Vuex from "vuex";
import { loadFromLocal } from "../utils/storage";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hasLogin: loadFromLocal("hasLogin"),
    userInfo: loadFromLocal("userInfo"),
    authorization: loadFromLocal("authorization"),
    referId: loadFromLocal("referId"),
    nickName: loadFromLocal("nickName"),
    avatarUrl: loadFromLocal("avatarUrl")
  },
  mutations: {
    LOGIN(state, provider) {
      state.hasLogin = !!provider.authorization;
      state.userInfo = provider;
      state.authorization = provider.authorization;
      state.referId = provider.referId;
      state.nickName = provider.nickName;
      state.avatarUrl = provider.avatarUrl;
    },
    LOGOUT(state) {
      state.hasLogin = false;
      state.userInfo = null;
      state.authorization = null;
      state.referId = null;
      state.nickName = null;
      state.avatarUrl = null;
    }
  },
  actions: {
    login({ commit }, data) {
      commit("LOGIN", data);
      uni.setStorageSync("hasLogin", !!data.authorization);
      uni.setStorageSync("userInfo", data);
      uni.setStorageSync("authorization", data.authorization);
      uni.setStorageSync("referId", data.referId);
      uni.setStorageSync("nickName", data.nickName);
      uni.setStorageSync("avatarUrl", data.avatarUrl);
    },
    logout({ commit }) {
      commit("LOGOUT");
      uni.removeStorageSync("hasLogin");
      uni.removeStorageSync("userInfo");
      uni.removeStorageSync("authorization");
      uni.removeStorageSync("referId");
      uni.removeStorageSync("nickName");
      uni.removeStorageSync("avatarUrl");
    }
  }
});

export default store;
