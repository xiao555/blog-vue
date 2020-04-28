<template>
  <article class='main-content' v-if='article'>
    <h2>{{ article.title }}</h2>
    <p>
      <small>{{ getLocalYearMonthDay(article.createDate) }}</small>
      <span id={id} class='leancloud_visitors ml-1'><small>阅读量</small> <small class="leancloud-visitors-count"></small></span>
    </p>
    <section v-html='article.content'></section>
    <section id='vcomments'></section>
  </article>
  <loading v-else></loading>
</template>

<script>
import articles from '../articles.json'
import { getLocalYearMonthDay } from '../assets/js/utils'
import Valine from 'valine'
import scrollHistory from '../mixins/scroll-history'

export default {
  name: 'Post',
  mixins: [scrollHistory],
  data () {
    const id = encodeURIComponent(this.$route.params.id)
    return {
      getLocalYearMonthDay,
      article: articles.find(item => item.id === id)
    }
  },
  mounted () {
    document.title = `${this.article.title} | 打开天眼看文章`
    new Valine({
      el:'#vcomments',
      appId: '2VQxghv1P34UuWX18ynpOBhX-gzGzoHsz',
      appKey: 'IUpu9P5iuaym0hGnWxogUvon',
      visitor: true,
      recordIP: true,
      path: this.article.id
    })
    // let historyMap = JSON.parse(window.localStorage.getItem('scroll-history')) || {}
    // document.documentElement.scrollTop = historyMap[location.pathname] || 0
  },
  beforeDestroy () {
    // let historyMap = JSON.parse(window.localStorage.getItem('scroll-history')) || {}
    // const scrollTop = document.documentElement.scrollTop
    // historyMap[location.pathname] = scrollTop
    // window.localStorage.setItem('scroll-history', JSON.stringify(historyMap))
  }
}
</script>