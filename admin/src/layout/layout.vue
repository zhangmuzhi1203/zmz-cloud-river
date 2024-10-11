<template>
  <div class="container">
    <div class="aside" :class="fold && 'fold'">
      <!-- logo组件 -->
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu router :collapse="fold">
          <!--根据路由动态生成侧边菜单栏-->
          <Aside :routes="userStore.routes"></Aside>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="right">
      <div class="tabbar" :class="fold && 'fold'">
        <Tabbar></Tabbar>
      </div>
      <div class="main" :class="fold && 'fold'">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script setup>
import Aside from './aside.vue'
import Tabbar from './tabbar.vue'
import Main from './main.vue'
import Logo from './logo.vue'
import { useUserStore } from '../store/user'
import emitter from '../utils/emitter'
import { ref } from 'vue'
let fold = ref(false)
let userStore = useUserStore()
emitter.on('send_fold', (data) => {
  fold.value = data
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;

  .aside {
    width: $base-menu-width;
    background-color: $base-menu-background;
    transition: all 0.3s;

    &.fold {
      width: $base-menu-min-width;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
        --el-menu-text-color: white;
        --el-menu-bg-color: #001529;
        --el-menu-active-color: brown;
      }
    }
  }

  .right {
    width: calc(100% - $base-menu-width);
    display: flex;
    flex-direction: column;

    .tabbar {
      width: 100%;
      height: $base-menu-logo-height;
      transition: all 0.3s;
      background: turquoise;

      &.fold {
        width: calc(100vw - $base-menu-min-width );
        left: $base-menu-min-width;
      }
    }

    .main {
      padding: 15px;
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      transition: all 0.3s;

      &.fold {
        width: calc(100vw - $base-menu-min-width );
        left: $base-menu-min-width;
      }
    }
  }
}
</style>