//用户小仓库
import { defineStore } from 'pinia'
import { login } from '../api/user'
import { getToken } from '../utils/token'
import { routes } from '../router/routes'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getToken(),
      routes
    }
  },
  actions: {
    async reqlogin (data) {
      let res = await login(data)
      if (res.data.code == 200) {
        return 'ok'
      }
    },
    async reqLogout () {
      let res = await logout()
      console.log(res)
      return 'ok'
    }
  },
  getters: {}
})