import { createStore } from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import categroy from './modules/categroy'
import createPersistedstate from 'vuex-persistedstate'
const moduleA = {
  state:{
    userName:'moduleA'
  },
  getters:{
    userName2(state){
      return state.userName + '，你好！'
    }
  }
}

const moduleB = {
  // 给模块B开启命名空间 
  namespaced: true,
  state:{
    userName:'moduleB',
    count:0
  },
  getters:{
    newName(state){
      return state.userName + '，你好！'
    }
  },
  mutations: {
    updateName(state){
      state.userName = '姚哭哭'
    },
    increate(state,payload){
      state.count += payload
    },
  },
  actions: {
    // context是上下文对象，包含commit方法，payload是调用increateAsync传递的额外参数
    increateAsync(context, payload){
      setTimeout(()=>{
        context.commit('increate', payload)
      }, 1000)
    }
  },
}

export default createStore({
  state: {
    userName:'姚婷婷',
    count:0
  },
  getters: {
    userName(state){
      return state.userName + '，你好！'
    }
  },
  mutations: {
    updateName(state){
      state.userName = '姚哭哭'
    },
    increate(state,payload){
      state.count += payload
    },
  },
  actions: {
    // context是上下文对象，包含commit方法，payload是调用increateAsync传递的额外参数
    increateAsync(context, payload){
      setTimeout(()=>{
        context.commit('increate', payload)
      }, 1000)
    }
  },
  modules: {
    // 把模块注册进来
    moduleA,
    moduleB,
    cart,
    user,
    categroy
  },
  // 配置操作
  plugins:[
    createPersistedstate({
      // 本地存储的名称
      key:'shop-project-vuex-store',
      // 制指定存储的模块
      paths:['user', 'cart'],
    })
  ]
})
