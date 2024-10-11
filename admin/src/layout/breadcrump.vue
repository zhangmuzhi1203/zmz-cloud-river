<template>
  <div class="breadcrump">
    <el-icon style="margin-right:5px ;" @click="iconStatus">
      <component :is="fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" :to="item.path" v-show="item.meta.title">
        <el-icon style="vertical-align: bottom;">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span> {{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import emitter from '../utils/emitter'
import { ref } from 'vue'
let fold = ref(false)
const iconStatus = () => {
  fold.value = !fold.value
  emitter.emit('send_fold', fold.value)
}
const $route = useRoute()
</script>

<style lang="scss" scoped>
.breadcrump {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
}
</style>