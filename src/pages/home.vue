<template>
  <div>
    <div v-for="item in newsArr" class="news">
      <img v-bind:src="item.thumb_url">
      <div class="content">
        <div class="content-title">{{item.title}}</div>
        <div class="content-foot">
          <span class="txt-type">{{item.category | categoryFilters}}</span>
          <span class="comments">{{item.comments_counts}}&nbsp;评论</span>
          <span class="date">&middot;&nbsp;{{item.created_at | dateFilters}}</span>
        </div>
      </div>
    </div>
    <div class="load-more-btn" @click="loadMore">加载更多</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      newsArr: [],
      page: '1'
    }
  },
  filters: {
    categoryFilters (type) {
      let str = ''
      switch (type) {
        case 1:
          str = '其他'
          break
        case 2:
          str = '娱乐'
          break
        case 3:
          str = '原创'
          break
        case 4:
          str = '历史'
          break
        case 5:
          str = '国际'
          break
      }
      return str
    },
    dateFilters (timestamp) {
      var date = new Date(timestamp * 1000)
      var Y = date.getFullYear() + '-'
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      var D = date.getDate() + ' '
      var h = date.getHours() + ':'
      var m = date.getMinutes() + ':'
      var s = date.getSeconds()
      return Y + M + D + h + m + s
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$ajax({
        method: 'get',
        url: 'http://restaurant.yijiahotel.shop/v1/news/1/10'
      }).then((res) => {
        console.log(res)
        this.newsArr = res.data.data
      })
    })
  },
  methods: {
    loadMore () {
      alert('让开，我要发动加载新数据了')
      this.page++
      this.$ajax({
        method: 'get',
        url: 'http://restaurant.yijiahotel.shop/v1/news/' + this.page + '/10'
      }).then((res) => {
        console.log(res)
        this.newsArr.push(...res.data.data)
      })
    }
  }
}
</script>

<style scoped>
  .news{
    /*height:2.45rem;*/
    display:flex;
    justify-content: center;
    padding-top:0.2rem;
    padding-bottom:0.2rem;
    margin:0;
    border-bottom:1px solid #ccc;
  }
  .news img{
    width:2.3rem;
    height:2rem;
  }
  .content{
    margin-left:0.1rem;
    margin-top:0.1rem;
  }
  .content-title{
    color:black;
    font-size:0.35rem;
    margin-top:0.1rem;
  }
  .content-foot{
    margin-top:0.2rem;
  }
  .content-foot span{
    color:#7A7777;
  }
  .txt-type{
    font-size:0.2rem;
    border:1px solid #ccc;
    padding:0.05rem;
  }
  .comments{
    font-size:0.2rem;
  }
  .date{
    font-size:0.2rem;
  }
  .load-more-btn{
    position: fixed;
    bottom: 2rem;
    right: .3rem;
    height: 1rem;
    width: 1.6rem;
    z-index: 1000;
    background-color: red;
    color: #fff;
    font-size: .14rem;
  }
</style>
