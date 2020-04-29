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
import { useScrollHistory } from '../assets/js/utils'
import { onMounted } from '@vue/composition-api'

export default {
  name: 'Home',
  components: {
    Loading,
    PostList
  },
  setup () {
    useScrollHistory()

    onMounted(() => {
      document.title = `首页 | 打开天眼看文章`
    })

    return {
      articles: articles.filter(item => item.id !== 'about-me')
    }
  }
}
</script>
