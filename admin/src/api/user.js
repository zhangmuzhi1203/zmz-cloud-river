import axiosInterceptors from '../utils/axios'
//登录请求
export const login = (data) => {
  axiosInterceptors.post('/admin/user/login', data)
}
//退出请求
export const logout = () => {
  axiosInterceptors.post('/admin/user/logout')
}