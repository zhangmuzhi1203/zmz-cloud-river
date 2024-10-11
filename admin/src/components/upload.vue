<template>
  <!-- 
   1.可以用 http-request 替代 actions 这两个选一个
   2.auto-upload 关闭自动上传
   3.list-type一般选择这个  URL.createObjectURL(uploadFile.raw) 可以生成在线预览地址
   4.show-file-list展示文件列表关闭
   5.要选on-change这个属性 on-success文件上传成功时的钩子 before-upload文件上传
   之间的钩子 都不选 因为需要文件状态改变时就调用 所以on-change最合适 添加文件 就触发这个钩子
  -->
  <el-upload class="avatar-uploader" :show-file-list="false" :http-request="upload" :auto-upload="false"
    list-type="text" :on-change="handleChange">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus />
    </el-icon>
  </el-upload>
</template>

<script setup>
import { ref } from 'vue'
let imageUrl = ref('')
const handleChange = (uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)

}
const upload = () => {
  console.log(11)
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>