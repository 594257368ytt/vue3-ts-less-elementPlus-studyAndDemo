<template>
    <div class="question5">
      <h1>Vuex的基本使用</h1>
      <h2>获取store数据</h2>
      <span>在页面中获取：{{ $store.state.userName}}</span><br>
      <h2>获取getter处理后的数据</h2>
      <span>在页面中获取：{{ $store.getters.userName}}</span><br>
      <el-button type="primary" @click="mutationFun">点我触发mutations</el-button>
    </div>
</template>
  
  <script lang="ts">
  import { reactive,  watch,  toRefs,  onMounted, ref,watchEffect } from 'vue'
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
  