<template>
  <div>
    <div v-for="item in newsArr" :key="item.id" class="news">
      <img v-bind:src="item.thumb_url">
      <div class="content">
        <div class="content-title">{{item.title}}</div>
        <div class="content-foot">
          <span class="txt-type">{{item.category | categoryFilters}}</span>
          <span class="comments">{{item.comments_counts}}&nbsp;评论</span>
          <span class="date">{{item.created_at | dateFilters}}</span>
        </div>
      </div>
    </div>
    <!--{{msg}}-->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      newsArr: []
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
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
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
    width:2.4rem;
    height:2rem;
  }
  .content{
    margin-left:0.2rem;
    margin-top:0.1rem;
  }
  .content-title{
    color:black;
    font-size:0.35rem;
    margin-top:0.1rem;
  }
  .content-foot{
    margin-top:0.1rem;
  }
  .content-foot span{
    color:#7A7777;
  }
  .txt-type{
    font-size:0.25rem;
    border:1px solid #ccc;
    padding:0.05rem;
  }
  .comments{
    font-size:0.2rem;
  }
  .date{
    font-size:0.2rem;
  }
</style>
