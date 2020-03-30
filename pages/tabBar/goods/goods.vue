<template>
  <div>
    <h1>商品页</h1>
    <button @click="openPopup">打开弹窗</button>
    <AppPublic />
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    openPopup() {
      console.log('click openPopup')
      this.$app.showPublicView({
        viewType: 'wechat-share'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
