<template>
  <!-- 组件的命名规范参考vant weapp -->
  <view>
    <view
      v-for="item in  publicViewData.viewList"
      :key="item"
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
</style>
