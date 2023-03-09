<template>
  <div class="question1">
    403
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
