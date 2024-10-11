<template>
  <div class="setting">
    <el-button size="small" circle icon="Refresh" @click="changeRefresh"></el-button>
    <el-button size="small" circle icon="FullScreen" @click="fullScreen"></el-button>
    <el-button size="small" circle icon="Setting"></el-button>
    <img src="../assets/images/logo.png" style="width: 20px;height: 20px;margin:0 10px;">
    <el-dropdown class="dropdown">
      <span>{{ xxx }}<el-icon><arrow-down /></el-icon></span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useUserStore } from '../store/user'
import { ref } from 'vue'
import emitter from '../utils/emitter'
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
let isRefresh = ref(false)
const userStore = useUserStore()
const changeRefresh = () => {
  emitter.emit('send_refresh', isRefresh.value)
}
const fullScreen = () => {
  //判断当前是不是全屏 
  let full = document.fullscreenElement
  if (!full) {
    //变成全屏
    document.documentElement.requestFullscreen()
  } else {
    //退出全屏
    document.exitFullscreen()
  }
}
const logout = async () => {
  //发送退出登录请求
  await userStore.reqLogout()
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style lang="scss" scoped>
.setting {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  .dropdown {
    margin-right: 20px;
  }
}
</style>