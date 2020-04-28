<template>
  <div id="app">
    <progress-bar></progress-bar>
    <main class="main">
      <sidebar></sidebar>
      <router-view></router-view>
    </main>

    <div v-if='showBackToTop' class='back-to-top' @click='scrollToTop'>
      <i class="fa fa-fighter-jet"></i>
    </div>
  </div>
</template>

<script>
import { scrollSmoothTo } from './assets/js/utils'
import ProgressBar from './components/ProgressBar'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    ProgressBar,
    Sidebar
  },
  data () {
    return {
      showBackToTop: false
    }
  },
  mounted () {
    this.showBackToTop = document.documentElement.scrollTop > 800
    window.addEventListener('scroll', () => {
      this.showBackToTop = document.documentElement.scrollTop > 800
    })
  },
  methods: {
    scrollToTop () {
      scrollSmoothTo(document.documentElement, 0)
    }
  }
}
</script>

<style>
@import url(App.css);
</style>
