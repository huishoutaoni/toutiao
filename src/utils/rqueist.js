// 对axios进行一个封装
import axios from 'axios'
import router from '../router'// 路由实例对象因引入
import { Message } from 'element-ui' // 引入提示对象

// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值地址

// 请求拦截
axios.interceptors.request.use(function (config) {
  console.log(config)
  // 执行ok
  // config 是axios的所有配置
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回的config 就会作为新的请求选项去请求
}, function () {
  // 执行请求失败
})

// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功是执行
  return response.data ? response.data : {} // 当data不存在时 then中读取数据报错问题
}, function (error) {
  console.log(error)
  // 回调函数 所有的失败 都会进入到第二个回调函数
  // 失败时执行状态码 不是200 或者201/204
  // 获取状态码 => 根据状态码 进行相应的提示或者操作
  let status = error.response.status // 获取状态码 根据状态码进行提示
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '手机或者验证码错误'
      break
    case 403:
      router.push('/login') // 强制回登录
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default :
      break
  }
  Message({ type: 'warning', message }) // 提示信息
  // 状态码 提示
})

export default axios
