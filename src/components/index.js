import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'

// 全局注册 导出
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
  }
}
