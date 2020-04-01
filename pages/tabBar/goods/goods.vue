<template>
  <view class="goods">
    <h1>商品页</h1>
    <button @click="openPopup">打开弹窗</button>
    <app-public :publicViewData="publicViewData" />
  </view>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      publicViewData: this.app.getPublicViewData()
    }
  },
  computed: {},
  onShow() {
    console.log('this.publicViewData', this.publicViewData)
  },
  methods: {
    openPopup() {
      this.app.showPublicView({
        viewType: 'loading',
        closeByModalEnable: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  background-color: rgb(96, 133, 255);
}
</style>
