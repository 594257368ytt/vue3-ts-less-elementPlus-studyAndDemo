<template>
  <div class="question4">
    <h1>异步</h1>

  </div>
</template>

<script lang="ts">
import { reactive, toRefs, toRef, ref, onMounted } from 'vue'
export default {
  name: 'Question4',
  props: {
    msg: String
  },
  setup() {
    const methods = {
      a(){
        console.log('111111111111 :>> ');
        new Promise((resolve, reject) => {
            resolve('成功状态！')
            // methods.a()
        }).then((value) => {
            methods.b()
        })
      },
      b(){
        console.log('222222222222 :>> ');
      },
      c(){
        console.log('333333333333 :>> ');
      },

    }
    onMounted(()=>{

      new Promise((resolve, reject) => {
          resolve('成功状态！')
          methods.a()
      }).then((value) => {
          methods.c()
      })
    })
    return {
        ...toRefs(methods),
    }
  }
}
</script>

<style scoped lang="less">
.question4 {
  // height: 500px;
  width: 100%;
  // background-color:cornflowerblue;
  .row-data{
    color: rgb(210, 28, 28);
  }
  .ref-data{
    color: #00b96b;
  }
}
</style>
