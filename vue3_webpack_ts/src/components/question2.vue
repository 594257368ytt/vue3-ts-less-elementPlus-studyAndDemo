<template>
  <div class="question2" ref="question2Ref">
    <h1>怎么获取dom元素</h1>
    <el-button type="primary" @click="getDom">点击获取dom</el-button>
  </div>
</template>

<script lang="ts">
import { reactive,  watch,  toRefs,  onMounted, ref,watchEffect } from 'vue'
export default {
  name: 'Question2',
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      a: 1,
    })
    const question2Ref = ref(null)

    onMounted(() => {
      methods.getDom()
    })
    const methods = {
      matchState:(state: any, reg: any) => {
          return !!String(state).match(reg)
      },
      getDom:() => {
        console.log('question2 获取的Dom元素 :>> ', question2Ref.value);
      }
    }
    let msg = ref(0)
    watchEffect((msg) => (newVal: any, oldVal: any) => {
      console.log('val :>> ', oldVal, newVal,msg);
    })
    return {
        ...toRefs(data),
        ...methods,
        msg,
        question2Ref,
    }
  }
}
</script>