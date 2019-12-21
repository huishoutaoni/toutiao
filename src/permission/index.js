// 权限拦截 导航守卫
import router from '../router'
// 全局设置守卫
router.beforeEach(function (to, from, next) {
  if (to.path !== '/login') {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放过
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
