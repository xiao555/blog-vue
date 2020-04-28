import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './views/Home'
import Post from './views/Post'
import About from './views/About'

import './main.css'

const router = new VueRouter({
  mode: 'history',
  routes:  [
    {
      path: '',
      component: Home
    },
    {
      path: '/post/:id',
      component: Post
    },
    {
      path: '/about',
      component: About
    },
  ]
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
