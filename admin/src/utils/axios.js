import axios from 'axios'
const axiosInterceptors = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000
})
//请求拦截器
axiosInterceptors.interceptors.request.use((config) => {
  return config
})
//响应拦截器
axiosInterceptors.interceptors.response.use((response) => {
  return response.data
})
export default axiosInterceptors