<template>
  <view>
    <view @click="closeByClickModal">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  props: ['currentViewData'],
  data() {
    return {}
  },
  computed: {},
  methods: {
    closeByClickModal() {
      if (this.currentViewData.closeByModalEnable) {
        this.app.hidePublicView(this.currentViewData.viewId)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
