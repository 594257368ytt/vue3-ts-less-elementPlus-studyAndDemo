import axios from 'axios'
import store from '../store'
import router from '../router'

const baseURL = "https://apipc-xiaotuxian-front.itheima.net/"
const instance = axios.create({
    baseURL,
    timeout: 5000
})
// 请求拦截器
// 第一个参数，实现具体的拦截任务，config表示请求的配置信息
// 第二个参数，拦截失败后的操作
instance.interceptors.request.use(
    (config) => {
        // 实现具体的拦截任务
        const { profile } = store.state.user
        if(profile.token){
            //config存储的是配置信息，里面有请求头，在请求头加上Authorization，把token交给它，注意token的语法格式
            config.headers.Authorization = `Bearer ${profile.token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
// 响应拦截器配置
// 第一个参数是终端返回的数据
// 第二个参数对错误信息进行处理
instance.interceptors.response.use(
    (res) => res.data,
    (err) => {
        // token数据无效，没有通过服务器校验
        if(err.response && err.response.status == 401){
            // 1、清空state无效的用户信息
            store.commit('user/setUser','')
            // 2、跳转到登录页
            // 在vue组件中跳转用$route.fullpath获取有参数的跳转，$route.path无参数跳转
            // 在js模块中router.currentRoute相当于组件中的$route，currentRoute是ref包裹的对象，所以要.value
            // 当路由为user?id=1&name='222',则有特殊符号&后面的参数无法取到，优特撒胡子福的地址都可以用encodeURIComponent解码
            const fullpath = encodeURIComponent(router.currentRoute.value.fullPath)
            router.push("/login/reddirectUrl=" + fullpath)
            // 3、跳转到登录页时，将当前路由信息传递到登录页面，登陆成功后可以直接跳转到之前访问的页面

        }
        return Promise.reject(err)
    }
)
// instance进一步设置，请求的地址、请求的方式、发送到服务端的数据
export default(url, method, submitData) => {
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data'] : submitData
    })
} 