<template>
  <div class="question3">
  </div>
</template>

<script lang="ts">
import { reactive,  watch,  toRefs,  onMounted, ref,watchEffect } from 'vue'
export default {
  name: 'Question3',
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
.question3 {
  height: 500px;
  width: 100%;
  background-color:cornflowerblue;
}
</style>
