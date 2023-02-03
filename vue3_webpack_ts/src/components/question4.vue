<template>
  <div class="question4">
    <h1>ref、toRef、toRefs区别</h1>

  </div>
</template>

<script lang="ts">
import { reactive, toRefs, toRef, ref } from 'vue'
export default {
  name: 'Question4',
  props: {
    msg: String
  },
  setup() {
 
    const methods = {
    
    }
    return {
        ...methods,
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
