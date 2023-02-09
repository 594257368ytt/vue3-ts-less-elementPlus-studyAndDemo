<template>
  <div class="header">
    <div class="header-title">
      工作中遇到的问题汇总
      <el-icon><Reading /></el-icon>：
      <span class="current-title">{{ currentTitle }}</span>
    </div>
    <div class="header-btns">
      <el-button type="primary"><el-icon><User /></el-icon>登录/注册</el-button>
      <el-button><el-icon><ChatLineRound /></el-icon> 评论</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ElButton , ElIcon} from 'element-plus'
import { reactive, watch, toRefs, onMounted, ref, watchEffect } from 'vue'
// import Icons from 'unplugin-icons/vite'
import  title  from '../data/title'
export default {
  name: 'header',
  props: {
    current: Number
  },
  components: {
    ElButton,
    ElIcon
  },
  setup(props) {
    const data = reactive({
      a: 1,
      currentTitle: ''
    })
    console.log('props :>> ', props.current, title);
    const methods = {
      matchState:(state: any, reg: any)=>{
          return !!String(state).match(reg)
      }
    }
    let msg = ref(0)
    watch(() => props.current, () => {
      if(props.current != undefined && props.current > -1){
      data.currentTitle = title.title[props.current].content
    }
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

<style scoped lang="less">
.header {
  height: 50px;
  // width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  min-width: 700px;
  background: #ffffff;
  border-bottom: 1px solid #dcdfe6;
  z-index: 99;
  .header-title{
    height: 50px;
    line-height: 50px;
    color:#585A5a;
    display: flex;
    align-items: center; 
    .el-icon{
      margin-left: 4px;
    }
    .current-title{
      color:#00b968;
      font-weight: 600;
    }
  }
  .header-btns{
    .el-icon{
      margin-right: 4px;
    }
  }
  .el-button--primary{
    background: #00b968;
    border-color: #00b968;
  }
}
</style>
