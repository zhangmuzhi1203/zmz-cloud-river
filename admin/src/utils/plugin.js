import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Upload from '../components/upload.vue'
const allGlobalComponents = { Upload }
export default {
  install (app) {
    Object.keys(allGlobalComponents).forEach(key => {
      app.component(key, allGlobalComponents[key])
    })
    //把elemicon组件注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}