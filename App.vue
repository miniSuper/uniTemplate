<script>
export default {
  onLaunch() {
    console.log('App Launch')
  },
  onShow() {
    console.log('App Show')
  },
  onHide() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/* #ifndef APP-PLUS-NVUE */
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import './assets/styles/uni.scss';

/* 以下样式用于 hello uni-app 演示所需 */
page {
  background-color: #f4f5f6;
  height: 100%;
  font-size: 28rpx;
  line-height: 1.8;
}

.uni-header-logo {
  padding: 30rpx;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rpx;
}

.uni-header-image {
  width: 100px;
  height: 100px;
}

.uni-hello-text {
  color: #7a7e83;
}

.uni-hello-addfile {
  text-align: center;
  line-height: 300rpx;
  background: #fff;
  padding: 50rpx;
  margin-top: 10px;
  font-size: 38rpx;
  color: #808080;
}

/* #endif*/
</style>
