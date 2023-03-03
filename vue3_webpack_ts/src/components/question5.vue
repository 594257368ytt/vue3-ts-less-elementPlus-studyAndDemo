<template>
  <div class="question5">
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
          <span @contextmenu="showPop(a.length, index)">
              <el-button class="iconfont icon icon-xiaohongqi" size="small" circle></el-button>
          </span> 
      </template>
      </el-popover>
    </template>
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
  </div>
</template>

<script lang="ts">
import { reactive, toRefs,  onMounted, ref,watchEffect, toRaw } from 'vue'
export default {
  name: 'Question5',
  props: {
    msg: String
  },
  setup() {
    // let visible = ref(false)
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
        console.log('popoverName :>> ', toRaw(popoverName.value));
        debugger
        popoverName.value[`popover-${index}`].doClose()
        // this.$refs[`popover-${scope.$index}`].doClose()
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
  height: 500px;
  width: 100%;
  background-color:cornflowerblue;
}
</style>
