<template>
    <div class="question5">
      <h1>Vuex的基本使用</h1>
      <h2>获取store数据</h2>
      <span>在页面中获取：{{ $store.state.userName }}</span><br>
      <h2>获取getter处理后的数据</h2>
      <span>在页面中获取：{{ $store.getters.userName }}</span><br>
      <h2>同步更新数据：</h2>
      <el-button type="primary" @click="mutationFun">点我触发mutations</el-button>
      <h2>异步更新数据：</h2>
      <span>count: {{ $store.state.count }}</span><br>
      <el-button type="primary" @click="actionsFun">点我触发actions</el-button>
      <h2>模块化</h2>
      <span>state：{{ $store.state.moduleA.userName }}</span><br>
      <span>getters：（没有定义命名空间直接$store.getters可以获取到）{{ $store.getters.userName }}</span><br>
      <span>getters：（定义了命名空间 $store.getters['']可以获取到）{{  $store.getters["moduleB/newName"] }}</span><br>
      <el-button type="primary" @click="mutationBFun">点我触发模块B mutations</el-button><br>
      <span>{{  $store.state.moduleB.count }}</span><br>
      <el-button type="primary" @click="actionsBFun">点我触发模块B actions</el-button>
      <h2>文件夹模块化</h2>
      <span>user/账户：{{ $store.state.user.profile.account }}</span><br>
      <el-button type="primary" @click="$store.commit('user/setUser',{ account:'牛牛' })">点击显示用户名，刷新页面消失</el-button>
      
    </div>
</template>
  
  <script lang="ts">
  import { reactive,  watch,  toRefs,  onMounted, ref, watchEffect } from 'vue'
  import { useStore } from 'vuex'

  export default {
    name: 'Question5',
    props: {
      msg: String
    },
    setup() {
      const store = useStore()
      console.log('store.state.userName 在setup中获取 :>> ', store.state.userName);
      console.log('store.getters.userName 在setup中获取 :>> ', store.getters.userName);

      const data = reactive({
      })

      const methods = {
        mutationFun:()=>{
          store.commit("updateName")
        },
        actionsFun:()=>{
          store.dispatch("increateAsync", 1)
        },
        mutationBFun:()=>{
          store.commit("moduleB/updateName")
        },
        actionsBFun:()=>{
          store.dispatch('moduleB/increateAsync', 6)
        }
      }
      return {
          ...toRefs(data),
          ...methods,
      }
    }
  }
  </script>
  
  <style scoped>
  .question5 {
    width: 100%;
  }
  </style>
  