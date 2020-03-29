<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    ></image>
    <button @click="hi">toast</button>
    <image
      v-for="(item,index) in imgs"
      :key="index"
      :src="item"
      mode="widthFix"
    ></image>
    <AppPublic />
  </view>
</template>

<script>
import { apiNewsList } from '@/api/'
export default {
  data() {
    return {
      title: 'Hello My App',
      imgs: []
    }
  },
  onLoad() {},
  methods: {
    async getNewsList() {
      try {
        const { data } = await apiNewsList({ loading: true })
        console.log(data)
      } catch (e) {
        //TODO handle the exception
        console.log(e)
      }
    },
    hi() {
      this.$app
        .getTempFilePaths([
          'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1484728154.jpg',
          'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2586800409.jpg'
        ])
        .then(res => {
          console.log('res', res)
          this.imgs = res
        })
        .catch(err => {
          console.log('err', err)
        })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
