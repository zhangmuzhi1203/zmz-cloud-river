import router from "../router"
import { getToken, } from "./token"
router.beforeEach((to, from, next) => {
  let token = getToken()
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else if (from.path == '/home') {
    next({ path: '/login' })
  } else if (to.path == '/login') {
    next()
  }
})
router.afterEach((to, from, next) => {

})