import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Register = () => import('@/views/Register.vue')
const Login = () => import('@/views/Login.vue')
const UserInfo = () => import('@/views/userInfo/UserInfo.vue')
const Edit = () => import('@/views/Edit.vue')
const AliasEdit = () => import('@/views/AliasEdit.vue')
const SignEdit = () => import('@/views/SignEdit.vue')
const MyQRcode = () => import('@/views/MyQRcode.vue')
const Home = () => import('@/views/Home.vue')
const Article = () => import('@/views/Article.vue')
const My = () => import('@/views/My.vue')

const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: UserInfo,
    meta: {
      title: '个人空间'
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      title: '资料编辑'
    }
  },
  {
    path: '/aliasedit',
    name: 'AliasEdit',
    component: AliasEdit,
    meta: {
      title: '修改昵称'
    }
  },
  {
    path: '/signedit',
    name: 'SignEdit',
    component: SignEdit,
    meta: {
      title: '修改签名'
    }
  },
  {
    path: '/myQRcode',
    name: 'MyQRcode',
    component: MyQRcode,
    meta: {
      title: '我的二维码'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    },
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article,
    meta: {
      title: '文章'
    }
  },
  {
    path: '/my',
    name: 'My',
    component: My,
    meta: {
      title: '我的'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 页面跳转改变标题
  Document.title = to.matched[0].meta.title
  console.log(from);
  next()
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router