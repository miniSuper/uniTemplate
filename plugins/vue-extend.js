import Vue from "vue";
import AppPublic from "../components/public/AppPublic";

/* 
https://ask.dcloud.net.cn/question/66748
uniapp 中  组件的注册好像只能在main.js中  无法通过main.js中引入其他的.js来实现注册
所以  本文件暂时无用
保留只是为了避免再次疑惑
*/
Vue.component("app-public", AppPublic);
