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
import { getLocalYearMonthDay, useScrollHistory } from '../assets/js/utils'
import Valine from 'valine'
import { onMounted } from '@vue/composition-api'

export default {
  name: 'About',
  setup () {
    const article = articles.find(item => item.id === 'about-me')

    useScrollHistory()

    onMounted(() => {
      document.title = `关于 | 打开天眼看文章`
      new Valine({
        el:'#vcomments',
        appId: '2VQxghv1P34UuWX18ynpOBhX-gzGzoHsz',
        appKey: 'IUpu9P5iuaym0hGnWxogUvon',
        visitor: true,
        recordIP: true,
        path: article.id
      })
    })

    return {
      getLocalYearMonthDay,
      article
    }
  }
}
</script>