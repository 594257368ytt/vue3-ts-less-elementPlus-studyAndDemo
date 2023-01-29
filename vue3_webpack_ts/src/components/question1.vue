<template>
  <div class="question1">
    <h1>v-if显示同一个值等于多种情况</h1>
    <span v-if="a==1 || a==2 || a==3">最基础的方法</span>
    <br>
    <span v-if="[1,2,3].includes(a)">数组的includes</span>
    <br>
    <span v-if="matchState(a,/[0,1,2]/)">函数方法</span>
  </div>
</template>

<script lang="ts">
import { reactive,  watch,  toRefs,  onMounted, ref, watchEffect } from 'vue'
export default {
  name: 'Question1',
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      a: 1,
    })
    const methods = {
      matchState:(state: any, reg: any)=>{
          return !!String(state).match(reg)
      }
    }
    let msg = ref(0)
    watchEffect((msg) => (newVal: any, oldVal: any) => {
      console.log('val :>> ', oldVal, newVal,msg);
    })
    onMounted(()=>{
    })
    return {
        ...toRefs(data),
        ...methods,
        msg
    }
  }
}
</script>

<style scoped>

</style>
