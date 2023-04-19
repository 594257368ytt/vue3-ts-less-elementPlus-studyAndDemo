<template>
  <el-popover
      placement="bottom"
      title="Title"
      :width="200"
      content="`this is content, this is content, this is content`"
      :visible="visibles"
    >
    {{ item }}
    <el-button size="small" style="margin-left: 14px;margin-right: 10px;" type="primary" @click="onMark()">确认</el-button>
    <template #reference>
        <span @contextmenu.prevent="showPop()">
            <el-button class="iconfont icon icon-xiaohongqi" size="small" circle></el-button>
        </span> 
    </template>
    </el-popover>
</template>

<script lang="ts">
import { buildSlots } from '@vue/compiler-core'
import { ElButton , ElIcon} from 'element-plus'
import { reactive, watch, toRefs, onMounted, ref, watchEffect } from 'vue'
import bus from '../../utils'

export default {
  name: 'popover',
  props: {
    item: Object
  },
  components: {
    ElButton,
    ElIcon
  },    
  setup(props, {emit}) {
    const data = reactive({
      visibles: false,
    })
    const methods = {
      onMark:()=>{
        data.visibles = false
      },
      showPop:()=>{
        console.log('props.item :>> ', props.item);
        bus.emit('isClickPopover', props.item.id)
      }
    }
    onMounted(()=>{
      bus.on('isClickPopover',(val)=>{
        if(val == props.item.id){
          data.visibles = true
        }else{
          data.visibles = false
        }
      })
    })
    return {
      ...toRefs(data),
      ...methods,
    }
  }
}
</script>

