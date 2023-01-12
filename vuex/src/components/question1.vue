<template>
  <div class="hello">
    <span v-if="a==1 || a==2 || a==3">最基础的方法显示同一个值等于多种情况</span>
    <br>
    <span v-if="[1,2,3].includes(a)">数组的includes</span>
    <br>
    <span v-if="matchState(a,/[0,1,2]/)">方法</span>
  </div>
</template>

<script>
import { reactive,  watch,  toRefs,  onMounted } from 'vue'
export default {
  name: 'Question1',
  props: {
    msg: String
  },
  setup() {
    const data = reactive({
      a:1,
    })
    const methods = {
        matchState:(state, reg)=>{
            return !!String(state).match(reg) // 返回true/false
        }
    }
    watch(() => (val) => {
      console.log('val :>> ', val);
    })
    onMounted(()=>{
    })
    return {
        ...toRefs(data),
        ...methods,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
