import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles/index.less'// 引入初始化样式
import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css'// 引入element-ui样式
import axios from 'axios' // 引入axios
import Component from './components'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值地址
Vue.prototype.$axios = axios // 赋值给全局对象

Vue.config.productionTip = false

Vue.use(ElementUI) // 全局注册
Vue.use(Component) // 全局注册对象 =>   调用该对象中的一个方法 install

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
