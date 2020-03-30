<template>
  <!-- 组件的命名规范参考vant weapp -->
  <view>
    <view
      v-for="item in  publicViewData"
      :key="item.viewId"
    >
      <view v-if="item.viewType==='loading'">
        <view class="loading">
          <view>
            <view class="i"></view>
            <view class="i"></view>
            <view class="i"></view>
          </view>
        </view>
      </view>
      <view v-else-if="item.viewType==='full-screen-loading'">
        <view class="fullScreenLoading">
          <view>
            <view class="i"></view>
            <view class="i"></view>
            <view class="i"></view>
          </view>
        </view>
      </view>
      <view v-else-if="item.viewType==='wechat-share'">
        i am share
      </view>
      <view v-else-if="item.viewType==='dialog-warn'">

      </view>
      <view v-else-if="item.viewType==='dialog-confirm'">

      </view>
    </view>

  </view>
</template>

<script>
export default {
  props: ['publicViewData'],
  data() {
    return {}
  },
  onShow() {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.loading {
  min-height: 40rpx;
  line-height: 40rpx;
  padding: 20rpx 0;
  font-size: 30rpx;
  text-align: center;
  color: #999;
  z-index: 999999999999;
  .i {
    display: inline-block;
    vertical-align: top;
    width: 30rpx;
    height: 30rpx;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.14);
    margin: 5rpx;
    animation: loading 1.2s ease-in-out infinite;
    transform: scale(0);
  }
  .i:nth-child(2) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .i:nth-child(3) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  &.full {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    animation: login 0.5s;
    display: flex;
    & > view {
      margin: auto;
    }
  }
}
</style>
