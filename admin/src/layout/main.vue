<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import emitter from '../utils/emitter'
import { ref, watch, nextTick } from 'vue'
let flag = ref(true)
emitter.on('send_refresh', (data) => {
  flag.value = data
})
watch(() => flag.value, () => {
  nextTick(() => {
    flag.value = true
  })
})
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>