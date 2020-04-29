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
import { scrollSmoothTo, useScroll } from './assets/js/utils'
import ProgressBar from './components/ProgressBar'
import Sidebar from './components/Sidebar'
import { computed } from '@vue/composition-api'

export default {
  name: 'App',
  components: {
    ProgressBar,
    Sidebar
  },
  setup () {
    const scrollTop = useScroll()
    const showBackToTop = computed(() => scrollTop.value > 800)
    const scrollToTop = () => scrollSmoothTo(document.documentElement, 0)
    return { showBackToTop, scrollToTop }

    // const showBackToTop = ref(false)
    // const scrollToTop = () => scrollSmoothTo(document.documentElement, 0)
    // onMounted(() => {
    //   console.log('mounted')
    //   showBackToTop.value = document.documentElement.scrollTop > 800
    //   window.addEventListener('scroll', () => {
    //     showBackToTop.value = document.documentElement.scrollTop > 800
    //   })
    // })
    // return { showBackToTop, scrollToTop }
  }
}
</script>

<style>
@import url(App.css);
</style>
