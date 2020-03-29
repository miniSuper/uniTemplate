<template>
  <!-- 组件的命名规范参考vant weapp -->
  <view>
    <view v-if="type==='loading'">

    </view>
    <view v-if="type==='full-loading'">

    </view>
    <view v-if="type==='dialog-warn'">

    </view>
    <view v-if="type==='dialog-confirm'">

    </view>
	<view v-else>
		i am app-public
	</view>
  </view>
</template>

<script>
export default {
  props: {
    type: ''
  },
  data() {
    return {}
  },
  onShow() {
    console.log('<h1>App public</h1>')
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
