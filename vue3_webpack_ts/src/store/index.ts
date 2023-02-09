import { createStore } from 'vuex'

export default createStore({
  state: {
    userName:'姚婷婷'
  },
  getters: {
    userName(state){
      return state.userName+'，你好！'
    }
  },
  mutations: {
    updateName(state){
      state.userName = '姚哭哭'
    }
  },
  actions: {
  },
  modules: {
  }
})
