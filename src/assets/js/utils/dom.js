import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api'

/**
 * 平滑滚动到指定位置
 * @param {Element} element - 平滑滚动的元素
 * @param {Number} position - 滚动到的位置
 */
export const scrollSmoothTo = (element, position) => {
  if (typeof window.getComputedStyle(document.body).scrollBehavior === 'undefined') {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback) {
        return setTimeout(callback, 17)
      }
    }
    const step = () => {
      const scrollTop = element.scrollTop
      const distance = position - scrollTop
      const nextScrollTop = scrollTop + (distance >= 0 ? Math.max(distance / 5, 1) : Math.min(distance / 5, -1))
      if (Math.abs(position - scrollTop) <= 1) {
        element.scrollTop = position
      } else {
        element.scrollTop = nextScrollTop
        requestAnimationFrame(step)
      }
    }
    step()
  } else {
    element.style.scrollBehavior = 'smooth'
    element.scrollTop = position
  }
}

export const useScroll = (element = document.documentElement) => {
  const value = ref(0)

  onMounted(() => {
    value.value = element.scrollTop > 800
    window.addEventListener('scroll', () => {
      value.value = element.scrollTop
    })
  })

  return value
}

let historyMap = JSON.parse(window.localStorage.getItem('scroll-history')) || {}

export const useScrollHistory = () => {
  const path = ref(location.pathname)

  onMounted(() => {
    document.documentElement.scrollTop = historyMap[path.value] || 0
  })

  onBeforeUnmount(() => {
    const scrollTop = document.documentElement.scrollTop
    historyMap[path.value] = scrollTop
    window.localStorage.setItem('scroll-history', JSON.stringify(historyMap))
    path.value = location.pathname
  })
}
