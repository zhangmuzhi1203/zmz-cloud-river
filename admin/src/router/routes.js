export const routes = [
  {
    path: '/login',
    component: () => import('../views/login.vue'),
    name: 'login',
    meta: {
      title: '登录',
      icon: '',
      isHidden: true
    }
  },
  {
    path: '/',
    component: () => import('../layout/layout.vue'),
    name: 'layout',
    redirect: '/home',
    meta: {
      title: '',
      icon: '',
      isHidden: true
    },
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          isHidden: false
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404.vue'),
    name: '404',
    meta: {
      title: '404',
      icon: '',
      isHidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: 'any',
      icon: '',
      isHidden: true
    }
  },
  {
    path: '/center',
    component: () => import('../layout/layout.vue'),
    name: 'center',
    redirect: '/center/person',
    meta: {
      title: '',
      icon: '',
      isHidden: true
    },
    children: [
      {
        path: '/center/person',
        component: () => import('../views/center.vue'),
        meta: {
          title: '个人中心',
          icon: 'User',
          isHidden: false
        }
      }
    ]
  },
  {
    path: '/screen',
    component: () => import('../views/screen/screen.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      icon: 'DataAnalysis',
      isHidden: false
    }
  },
  {
    path: '/monitor',
    component: () => import('../layout/layout.vue'),
    name: 'monitor',
    redirect: '/monitor/display',
    meta: {
      title: '',
      icon: '',
      isHidden: true
    },
    children: [
      {
        path: '/monitor/display',
        component: () => import('../views/monitor.vue'),
        meta: {
          title: '云端监测',
          icon: 'Monitor',
          isHidden: false
        }
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../layout/layout.vue'),
    name: 'user',
    redirect: '/user/list',
    meta: {
      title: '用户管理',
      icon: 'UserFilled',
      isHidden: false
    },
    children: [
      {
        path: '/user/add',
        component: () => import('../views/user/userAdd.vue'),
        name: 'useradd',
        meta: {
          title: '添加用户',
          icon: 'FolderChecked',
          isHidden: false
        }
      },
      {
        path: '/user/list',
        component: () => import('../views/user/userList.vue'),
        name: 'userlist',
        meta: {
          title: '用户列表',
          icon: 'Avatar',
          isHidden: false
        }
      }
    ]
  },
  {
    path: '/river',
    component: () => import('../layout/layout.vue'),
    name: 'river',
    redirect: '/river/list',
    meta: {
      title: '水域管理',
      icon: 'Finished',
      isHidden: false
    },
    children: [
      {
        path: '/river/add',
        component: () => import('../views/river/riverAdd.vue'),
        name: 'riveradd',
        meta: {
          title: '添加水域',
          icon: 'FolderChecked',
          isHidden: false
        }
      },
      {
        path: '/river/list',
        component: () => import('../views/river/riverList.vue'),
        name: 'riverlist',
        meta: {
          title: '水域列表',
          icon: 'Histogram',
          isHidden: false
        }
      },
      {
        path: '/river/data',
        component: () => import('../views/river/riverData.vue'),
        name: 'riverdata',
        meta: {
          title: '水质数据',
          icon: 'Coin',
          isHidden: false
        }
      }
    ]
  },
]