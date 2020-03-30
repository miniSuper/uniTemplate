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
      // publicViewData: this.$app.getPublicViewData()
      publicViewData: {
        viewList: [{ viewType: 'wechat-share' }, { viewType: 'wechat-share' }]
      }
    }
  },
  computed: {},
  onShow() {
    console.log('this.publicViewData', this.publicViewData)
  },
  methods: {
    openPopup() {
      console.log('click openPopup')
      this.$app.showPublicView({
        viewType: 'loading'
      })
      setTimeout(() => {
        console.log('this.publicViewData', this.publicViewData)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods {
  background-color: red;
}
</style>
