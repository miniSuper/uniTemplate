<template>
  <!-- 组件的命名规范参考vant weapp -->
  <view>
    <app-public-wrap
      v-for="item in  publicViewData.viewList"
      :key="item.viewId"
      :currentViewData="item"
    >
      <view v-if="item.viewType==='loading'">
        <view class="loading">
          <view class="three-bounce">
            <view class="bounce"></view>
            <view class="bounce"></view>
            <view class="bounce"></view>
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
        <view class="wechat-share">
          i am share
        </view>
      </view>
      <view v-else-if="item.viewType==='dialog-warn'">
        <view class="dialog-warn">

        </view>
      </view>
      <view v-else-if="item.viewType==='dialog-confirm'">
        <view class="dialog-confirm">

        </view>
      </view>
      <view v-else>
        错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误错误 错误
      </view>
    </app-public-wrap>

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
</style>
