<template>
  <div class="question5">
    错误示范：点击一个点弹出三个弹窗
    <br>
    <template v-for="( item, index) in a">
      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        content="`this is content, this is content, this is content`"
        :visible="visible"
        ref="popoverName"
      >
      {{ item.id }}
      <el-button size="small" style="margin-left: 14px;margin-right: 10px;" type="primary" @click="onMark2(index)">确认</el-button>
      <template #reference>
          <span @contextmenu="showPop2()">
              <el-button class="iconfont icon icon-xiaohongqi" size="small" circle></el-button>
          </span> 
      </template>
      </el-popover>
    </template>
    <br>
    解决方案1：visible属性弄成数组，那些需要显示那个不需要显示
    <br>
    <template v-for="( item, index) in a">
      <el-popover
        placement="bottom"
        title="Title"
        :width="200"
        content="`this is content, this is content, this is content`"
        :visible="visibles[index]"
      >
      {{ item.id }}
      <el-button size="small" style="margin-left: 14px;margin-right: 10px;" type="primary" @click="onMark(index)">确认</el-button>
      <template #reference>
          <span @contextmenu.prevent="showPop(a.length, index)">
              <el-button class="iconfont icon icon-xiaohongqi" size="small" circle></el-button>
          </span> 
      </template>
      </el-popover>
    </template>
    <br>
    解决方案2：抽组件
    <br>
    <template v-for="item in a">
      <popover :item="item"></popover>
    </template>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs,  onMounted, ref,watchEffect, toRaw } from 'vue'
import popover from './popover/popover.vue'

export default {
  name: 'Question5',
  props: {
    msg: String
  },
  components:{
    popover
  },
  setup() {
    const data = reactive({
      a: [{id:1},{id:2},{id:3}],
      visible : false,
      visibles: [] as any[]
    })
    const popoverName = ref()
    const methods = {
      matchState:(state: any, reg: any)=>{
          return !!String(state).match(reg)
      },
      showPop: (length, index)=>{
        // data.visible = !data.visible
        for(let i=0 ; i<length; i++){
          if(i == index){
            data.visibles[i] = true
          }else{
            data.visibles[i] = false
          }
        }
        console.log('length,index :>> ', length, index, data.visibles);
      },
      showPop2: ()=>{
        data.visible = true
      },
      onMark:(index)=>{
        console.log('index :>> ', index, data.visible[index]);
        data.visibles[index] = false
      },
      onMark2:(index)=>{
        // popoverName.value[`popover-${index}`].doClose()
        data.visible = false
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
        popoverName,
        ...methods,
        msg
    }
  }
}
</script>

<style scoped>
.question5 {
  /* height: 500px; */
  width: 100%;
  background-color:cornflowerblue;
  /* min-width: 1500px; */
}
</style>
