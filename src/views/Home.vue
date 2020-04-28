<template>
  <div v-if='articles'>
    <div className='main-content' v-for='item in articles' :key='item.id'>
      <post-list :post='item'/>
    </div>
  </div>
  <loading v-else></loading>
</template>

<script>
import articles from '../articles.json'
import Loading from '../components/Loading'
import PostList from '../components/PostList'
import scrollHistory from '../mixins/scroll-history'

export default {
  name: 'Home',
  components: {
    Loading,
    PostList
  },
  mixins: [scrollHistory],
  data () {
    return {
      articles: articles.filter(item => item.id !== 'about-me')
    }
  },
  mounted () {
    document.title = `首页 | 打开天眼看文章`
  }
}
</script>
