<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="9">
        <el-card class="leftBox">
          <el-avatar :size="100" :src="state.circleUrl" />
          <h3>{{ "张牧之" }}</h3>
          <h5>{{ "管理员" }}</h5>
        </el-card>
      </el-col>
      <el-col :span="15">
        <el-card>
          <template #header>
            <span> 个人信息</span>
          </template>

          <el-form label-width="70px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input />
            </el-form-item>

            <el-form-item label="手机号" prop="phone">
              <el-input />
            </el-form-item>

            <el-form-item label="性别" prop="gender">
              <el-select class="m-2" placeholder="请选择性别" style="width: 100%">
                <el-option />
              </el-select>
            </el-form-item>

            <el-form-item label="简介" prop="introduction">
              <el-input :rows="2" type="textarea" placeholder="请输入个人简介" />
            </el-form-item>

            <el-form-item label="头像" prop="avatar">
              <Upload />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm()">更新</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

import Upload from '../components/upload.vue'
import { reactive } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})
</script>

<style lang="scss" scoped>
.leftBox {
  text-align: center;
  cursor: pointer;

  h3 {
    margin: 10px 0;
  }
}
</style>