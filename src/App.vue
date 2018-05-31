<template>
  <div id="app">
    <router-view class="view-box"/>
    <div class="menu-box">
      <router-link tag="a"  to="/home" class="img-box" active-class="selected">
        <div class="page-box"></div>
        <span>推荐</span>
      </router-link>
      <router-link  tag="a" to="/video" class="img-box" active-class="selected">
        <div class="video-box"></div>
        <span>视频</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import './assets/js/flexiable'
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
  }
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.view-box{
  color:red;
  border:1px solid #ccc;
  flex: 1;
}
.menu-box{
  background-color: #ccc;
  height: 1.2rem;
  display:flex;
  justify-content:space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.img-box{
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-size:0.3rem;
  text-decoration: none;
}
  .img-box>div{
    width:0.6rem;
    height:0.6rem;
    background-size:0.6rem 0.6rem;
  }
  .menu-box .img-box .page-box{
    background-image:url("./assets/icon_page.png");
  }
  .menu-box .img-box .video-box{
    background-image:url("./assets/icon_video.png");
  }
  .menu-box .img-box.selected .page-box{
    background-image:url("./assets/icon_page_active.png");
  }
  .menu-box .img-box.selected .video-box{
    background-image:url("./assets/icon_video_active.png");
  }
  .menu-box .img-box.selected span{
    color: #9B4A47;
  }
  .menu-box .img-box span{
    color:#8A8A8A;
  }
</style>
