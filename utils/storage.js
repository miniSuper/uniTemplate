import store from "../store";

export const loadFromLocal = key => {
  return uni.getStorageSync(key);
};

export const saveToLocal = (key, value) => {
  return uni.setStorageSync(key, value);
};

export const removeLocal = key => {
  return uni.removeStorageSync(key);
};

export const persistVuex = () => {
  const userInfo = loadFromLocal("userInfo");
  store.commit("login", userInfo);

  store.subscribe((mutation, state) => {
    const type = mutation.type;
    if (type === "login") {
      saveToLocal("hasLogin", !!state.Authorization);
      saveToLocal("userInfo", state);
      saveToLocal("Authorization", state.Authorization);
      saveToLocal("referId", state.referId);
      saveToLocal("nickName", state.nickName);
      saveToLocal("avatarUrl", state.avatarUrl);
    } else if (type === "logout") {
      removeLocal("hasLogin");
      removeLocal("userInfo");
      removeLocal("Authorization");
      removeLocal("referId");
      removeLocal("nickName");
      removeLocal("avatarUrl");
    }
    console.log("mutation.type", mutation.type);
  });
};
