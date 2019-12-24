import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'
import BreadCrumd from './common/bread-crumd'

// 全局注册 导出
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
    Vue.component('bread-crumd', BreadCrumd) // 全局注册一个面包屑
  }
}
