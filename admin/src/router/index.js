import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 如果有保存的位置，则滚动到该位置
    if (savedPosition) {
      return savedPosition
    } else {
      // 默认返回到页面顶部
      return { top: 0 }
    }
  }
})
export default router