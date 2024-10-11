import { createApp } from 'vue'
import App from './App.vue'
//导入路由
import router from './router'
//导入pinia
import pinia from './store'
//导入elem
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//导入自定义插件对象
import globalComponent from './utils/plugin'
//导入全局样式
import './styles/index.scss'
const app = createApp(App)
//注册路由
app.use(router)
//注册pinia
app.use(pinia)
//注册elem
app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})
//注册自定义插件对象
app.use(globalComponent)
app.mount('#app')
