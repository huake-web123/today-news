<template>
  <div>
    <div class="news">
      <img>
      <div class="content">
        <div class="content-title">看见纽约高中的中文试卷，我可能是个假中国人</div>
        <div>
          <span>其他</span>
          <span>评论</span>
        </div>
      </div>
    </div>
    <div class="news"></div>
    <div class="news"></div>
    <div class="news"></div>
    <div class="news"></div>
    <div class="news"></div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$ajax({
        method: 'get',
        url: 'http://restaurant.yijiahotel.shop/v1/news/1/10'
      }).then((res) => {
        console.log(res)
      })
    })
  }
}
</script>

<style scoped>

</style>
