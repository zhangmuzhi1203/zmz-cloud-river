<template>
  <div class="logo">
    <img src="../assets/images/logo.png" alt="">
    <p>云端水质监测在线管理系统</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;

  img {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }

  p {
    font-size: 20px;
    white-space: nowrap;
  }
}
</style>