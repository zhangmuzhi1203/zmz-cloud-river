<template>
  <div class="container">
    <el-form class="loginForm" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
      <h1>云端水质监测在线管理系统</h1>
      <el-form-item prop="username">
        <el-input type="text" placeholder="请输入账号" :prefix-icon="User" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password
          v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" color="#626aef" class="btn" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '../utils/time'
//定义表单收集数据
let loginForm = reactive({
  username: 'zmz',
  password: 'qwe123..'
})
//登录加载效果
let loading = ref(false)
//定义用户仓库
let userStore = useUserStore
//定义路由对象和路由器
let $router = useRouter()
let $route = useRoute()
//获取表单实例对象
let loginFormRef = ref()
//自定义校验配合正则
const validateUserName = (rules, value, callback) => {
  //这是一个包含验证规则的对象或数组
  const usernameRegex = /^[a-zA-Z0-9_]{3,8}$/ // 只允许字母、数字和下划线，长度为3到8位
  //这是要验证的实际值，通常是用户输入的值
  if (!value) {
    //这是一个回调函数，验证完成后需要调用它来通知验证的结果。
    callback(new Error('用户名不能为空'))
  } else if (!usernameRegex.test(value)) {
    callback(new Error('用户名必须是3到16位的字母、数字或下划线'))
  } else {
    callback() // 验证通过
  }
}
const validatePassWord = (rules, value, callback) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@#$%^&*.]{8,16}$/
  if (!value) {
    callback(new Error('密码不能为空'))
  } else if (!passwordRegex.test(value)) {
    callback(new Error('密码必须是8到16位，且包含字母,数字,字符'))
  } else {
    callback() // 验证通过
  }
}
//表单校验
const loginFormRules = {
  username: [
    { required: true, validator: validateUserName, trigger: 'change' }
  ],
  password: [
    { required: true, validator: validatePassWord, trigger: 'change' }
  ]
}
const login = async () => {
  //返回一个Promise对象,返回fulfilled才执行后续代码
  await loginFormRef.value.validate()
  loading.value = true
  try {
    // await userStore.reqLogin(loginForm)
    $router.push('/')
    ElNotification({
      title: '登录成功',
      message: `嗨！现在是${getTime()}`,
      type: 'success',
      duration: 2000
    })
  } catch (error) {
    ElNotification({
      title: '登录失败',
      type: 'error',
      message: error.message,
      duration: 2000
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('../assets/images/login_bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    width: 40%;
    //毛片玻璃
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 20px;

    h1 {
      color: white;
      font-size: 30px;
      text-align: center;
      margin: 20px 0;
    }

    .btn {
      width: 100%;
    }
  }
}
</style>