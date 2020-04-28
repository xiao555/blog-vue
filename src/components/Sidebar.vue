<template>
  <div class='sidebar text-left'>
      <h1>
      <router-link class='logo' to='/'>打开天眼看文章</router-link>
    </h1>
    <p>TECH | LIFE | X</p>
    <p class='font-sm'>
      <router-link class='text-blue' to='/about' title='about me'>@me |</router-link>
      <a class='text-green' href='https://github.com/xiao555' title='github' target='_blank' rel='noopener noreferrer'>@github</a>
    </p>
    <p class='font-sm'>
      <a href='mailto:zhangruiwu32@gmail.com'>zhangruiwu32@gmail.com</a>
    </p>
    <p><small>本站已存活 {{ total }} 天</small></p>
    <button class='border-0 px-0' @click='toggleDarkMode'>
      <i class='fas fa-sun' v-if='enabledDarkMode'></i>
      <i class='fas fa-moon' v-else></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    const birthDay = 1583224596000
    const now = new Date()
    const duration = now.getTime() - birthDay
    const total = Math.floor(duration / (1000 * 60 * 60 * 24))
    return {
      total,
      enabledDarkMode: false
    }
  },
  mounted () {
    this.enabledDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches
    window.document.body.classList[this.enabledDarkMode ? 'add' : 'remove']('dark-mode')
  },
  methods: {
    toggleDarkMode () {
      this.enabledDarkMode = !this.enabledDarkMode
      window.document.body.classList[this.enabledDarkMode ? 'add' : 'remove']('dark-mode')
    },
  }
}
</script>