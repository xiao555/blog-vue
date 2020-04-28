export default {
  data () {
    return {
      path: this.$route.path
    }
  },
  mounted () {
    let historyMap = JSON.parse(window.localStorage.getItem('scroll-history')) || {}
    document.documentElement.scrollTop = historyMap[this.path] || 0
    console.log('enter', this.path, historyMap[this.path] || 0)
  },
  beforeDestroy () {
    let historyMap = JSON.parse(window.localStorage.getItem('scroll-history')) || {}
    const scrollTop = document.documentElement.scrollTop
    historyMap[this.path] = scrollTop
    window.localStorage.setItem('scroll-history', JSON.stringify(historyMap))
    console.log('leave', this.path, historyMap[this.path])
  }
}