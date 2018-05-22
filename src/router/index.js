import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Video from '@/pages/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    }
  ]
})
