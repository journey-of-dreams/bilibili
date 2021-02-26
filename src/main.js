import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import http from '../http.js'
import dialog from './components/common/dialog/index.js'
import VueClipboard from 'vue-clipboard2'

import {
  Toast,
  Uploader,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Collapse,
  CollapseItem
} from 'vant'
// setDefaultOptions修改默认配置
Toast.setDefaultOptions({
  duration: 1000
});

Vue.prototype.$http = http
Vue.prototype.$msg = Toast
Vue.use(Vant)
Vue.use(dialog)
Vue.use(VueClipboard)
Vue.use(Uploader)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')