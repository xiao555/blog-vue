<template>
  <router-link :to="`/post/${post.slug}`">
    <article class='post-list-item'>
      <div class='post-list-item-info'>
        <h2>{{ post.title }}</h2>
        <p><small>{{ getLocalYearMonthDay(post.createDate) }}</small></p>
        <p v-html='post.intro'></p>
      </div>
      <div class='post-list-item-thumb-wrapper'>
        <div class='post-list-item-thumb' :style='`backgroundImage: url(${post.thumb})`'></div>
      </div>
    </article>
  </router-link>
</template>

<script>
import { getLocalYearMonthDay } from '../assets/js/utils'

export default {
  name: 'PostList',
  props: {
    post: Object
  },
  data () {
    return {
      getLocalYearMonthDay
    }
  }
}
</script>

<style>
.post-list-item {
  display: flex;
  cursor: pointer;
}

.post-list-item:hover {
  background-color: var(--list-hover-background-color);
  transition: all 0.3s ease-in;
}

.post-list-item-info {
  word-break: break-all;
}

.post-list-item-info h2 {
  margin-top: 0;
}

.post-list-item-thumb {
  width: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
  background-size: cover;
}

@media (min-width: 992px) {
  .post-list-item {
    padding: 20px;
  }
  .post-list-item-info {
    flex: 0 0 60%;
  }
  .post-list-item-thumb-wrapper {
    flex: 0 0 40%;
    width: 40%;
    padding: 20px;
    max-width: 250px;
    max-height: 250px;
    align-self: center;
  }
}

@media (max-width: 992px) {
  .post-list-item {
    flex-direction: column-reverse;
    margin: 10px 0;
    padding: 10px 0;
    border-top: 1px dashed #999;
  }
  .post-list-item-info {
    flex: 0 0 100%;
  }
  .post-list-item-thumb-wrapper {
    flex: 0 0 100%;
  }
}
</style>