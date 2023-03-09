import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../home/index.vue'
import login from '../login/index.vue'
import notfound from '../errorPage/404.vue'
import forbidden from '../errorPage/403.vue'
import layout from '../layout/index.vue'
// 初始化路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]
// 动态加载路由
/* 根据用户权限不同，看到的页面不同（addRouter）
admin -- 所有页面
vip -- vip权限
svip -- 更多vip权限 */
export const DynamicRoutes =  [
  {
    path: '',
    component: layout,
    name: 'container',
    redirect: 'home',
    meta: {
      requiresAuth: true,  // 登陆之后才能进入
      name: '首页'
    },
    children: [
      {
        path: "home",
        Comment: home,
        name: "home",
        meta: {
          // 匹配规则
          name: "首页",
          icon: "icon-name"
        }
      }
    ]
  },
  {
    path: "/403",
    component: forbidden,
  },
  {
    path: "*",
    component: notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
