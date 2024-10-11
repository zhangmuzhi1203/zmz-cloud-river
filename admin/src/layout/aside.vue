<template>
  <template v-for="(item, index) in routes" :key="item.path">
    <template v-if="!item.children">
      <!-- 没有子路由 -->
      <el-menu-item v-if="!item.meta.isHidden" :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span> {{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <!-- 有一个子路由时显示这个子路由 -->
      <el-menu-item v-if="!item.children[0].meta.isHidden" :index="item.children[0].path">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        {{ item.children[0].meta.title }}
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length > 1">
      <!-- 子路由大于1个的时候 -->
      <el-sub-menu v-if="!item.meta.isHidden" :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <Aside :routes="item.children"></Aside>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup>
const props = defineProps({
  routes: {
    default: ''
  }
})
// defineProps(['routes'])
defineOptions({
  name: 'Menu'  // 这里定义了组件的名字
})

</script>

<style lang="scss" scoped></style>