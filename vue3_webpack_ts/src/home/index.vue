<template>
  <div>
    <router-view/>
    <el-affix :offset="0">
        <Header :current = "Number(currentNavIndex) - 1"></Header>
    </el-affix>
    <el-row>
      <el-col :span="5" class="sidebar-container">
        <el-affix :offset="50">
          <el-menu id="leftmenu" :default-active="currentNavIndex" class="el-menu-vertical-demo" @open="handleOpen" >
            <template v-for="(item, index) in titleData" :key="'title' + index">
              <el-menu-item :index="item.index + ''" @click="positionFun(item.index)" >
                <template #title>
                  <span class="adide-content">{{ item.content }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-affix>
        <div id="drap-meuline" />
      </el-col>

      <el-col :span="19" class="main-container">
        <Vuex class="section"></Vuex>
        <hr/>
        <ts class="section"/>
        <hr/>
        <Q1 class="section"/>
        <hr/>
        <Q2 class="section"/>
        <hr/>
        <Q3 class="section"/>
        <hr/>
        <Q4 class="section"/>
        <hr/>
        <Q5 class="section"/>
        <hr/>
      </el-col>
    </el-row>
    <el-backtop :right="70" :bottom="100" />
  </div>
</template>
<script lang="ts">
import Vuex  from '../components/vuex.vue'
import Header from '../components/header.vue'
import Q1 from '../components/question1.vue'
import Q2 from '../components/question2.vue'
import Q3 from '../components/question3.vue'
import Q4 from '../components/question4.vue'
import Q5 from '../components/question5.vue'
import ts from '../components/typescript.vue'
import { ElBacktop, ElMenu,  ElMenuItem, ElButton, ElCol, ElRow, ElAffix } from 'element-plus'
import { reactive, toRefs, onMounted, watch } from 'vue'
import  title  from '../data/title'
export default {
  name: 'App',
  components: {
    Vuex,
    Header,
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    ts,
    ElBacktop,
    ElMenu,
    ElMenuItem,
    Document,
    Location,
    ElButton,
    ElCol,
    ElRow,
    ElAffix
  },
  setup(){
    const data = reactive({
      titleData: [] as any,
      scroll: 0,
      currentNavIndex: '1',
    })
    const handleOpen = (key: string, keyPath: string[]) => {
      // console.log(key, keyPath)
    }
    const methods = {
      // ??????????????????
      getTitleData:()=>{
        console.log(title.title)
        data.titleData = title.title
      },
      positionFun:(index: string)=>{

        // console.log('index :>> ', index);
        let jump:any = document.getElementsByClassName('section');
        // ???????????????????????????
        let total = jump[Number(index) - 1].offsetTop;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
      },
      // ?????????????????????????????????
      MuneResize:(data: any)=> {
        // ???????????????????????????
        const leftDom = <HTMLElement>document.getElementById(`${data.targetId}`);
        // ???????????????????????????
        const mainContainer =
          <HTMLElement>document.getElementsByClassName("main-container")[0];
          mainContainer.style.marginLeft = leftDom.clientWidth + "px";
      },
      dataScroll: function () {
        data.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      },
      // ?????????????????????????????????????????????
      loadSroll: function () {
        var sections:any = document.getElementsByClassName('section');
        // ???????????????????????????dom??????
        for (var i = sections.length - 1; i >= 0; i--) {
          // console.log('object :>> ', data.scroll, sections[i].offsetTop);
          // ?????????????????????????????????????????????
          if (data.scroll >= sections[i].offsetTop - 50) {
            data.currentNavIndex = i + 1 + '';
            console.log('data.currentNavIndex :>> ', data.currentNavIndex);
            break;
          }
        }
      }
    }
    onMounted(()=>{
      // ?????????????????????
      methods.getTitleData()
      // ???????????????????????????????????????????????????????????????????????????
      window.addEventListener('scroll', methods.dataScroll);
      // ???????????????
      // ??????dom???????????????????????????
      var drapLine = <HTMLElement>document.getElementById("drap-meuline");
      // ??????????????????Dom
      var mainContainer = <HTMLElement>document.getElementsByClassName("main-container")[0];
      // ??????????????????Dom
      var menuleft = <HTMLElement>document.getElementById("leftmenu");
      // ??????????????????Dom????????????????????????????????????
      var sidebarWidth = <HTMLElement>document.getElementsByClassName("sidebar-container")[0];
        
      // // ????????????????????????
      drapLine.onmousedown = function (e: MouseEvent) {
        // ????????????/????????????
        var max_width = 480;
        var min_width = 236;
        let mouse_x = 0;  // ??????????????????left??????x?????????
        e.preventDefault(); // ??????????????????
        const _e: MouseEvent = (e || window.event) as MouseEvent;
        mouse_x = _e.clientX - menuleft.offsetWidth;
        document.onmousemove = function (e_: MouseEvent) {
          // console.log(min_width, max_width);
          const _e_: MouseEvent = (e_ || window.event) as MouseEvent;;
          let left_width = _e_.clientX - mouse_x;

          left_width = left_width < min_width ? min_width : left_width;
          left_width = left_width > max_width ? max_width : left_width;
          sidebarWidth.style.width = left_width + "px";
          sidebarWidth.style.width = left_width + "px";
          sidebarWidth.style.flex = '0 0 '+ left_width + "px";
          sidebarWidth.style.maxWidth = '480px'

          menuleft.style.width = left_width + "px";
          menuleft.style.width = left_width + "px";
          menuleft.style.flex = '0 0 '+ left_width + "px";
          menuleft.style.maxWidth = '480px'

          drapLine.style.left = left_width + "px";
          // console.log('object :>> ',left_width);
        };
        document.onmouseup = function (e) {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    })
    watch(() => data.scroll, () => {
      methods.loadSroll()
    })
    return{
      ...methods,
      ...toRefs(data),
      handleOpen,
    }
  }

}
</script>

<style lang="less">
h1{
  font-size: 24px;
}
h2{
  font-size: 22px;
}
.adide-content{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.sidebar-container{
  position: sticky;
  top: 0;
  // background-color: #00b96b;
}
#drap-meuline {
  background: #00b96b;
  width: 4px;
  height: 100px;
  cursor: e-resize; //?????????????????????????????????????????????
  position: fixed; 
  top: calc(50% - 50px);
  left: 242px;
}
#leftmenu{
  max-width: 480px;
}
.el-col-19{
  flex:1;
  max-width: 100%;
  padding: 0px 10px;
}
.el-col-5{
  flex:0 0 236px !important;
  max-width: 480px;
}
.el-menu-item{
  height: 36px;
  line-height: 36px;
  padding: 0 8px 0 8px;
  color:#585A5a;
  .adide-content{
    border-radius: 6px;
    height: 36px;
    line-height: 36px;
    padding-left: 14px;
    width: 100%;
    text-align: left;
  }
}
.el-menu-item.is-active{
  .adide-content{
    background: #00b96b; 
    color: #262626d2;
    font-weight: 700;
    margin-left: 0;
    color:#585A5a;
  }
}
.adide-content{
  color: #262626a9;
}
.main-container{
  flex:1 !important;
  max-width: 100% !important;
  .section:nth-child(odd){
    background-color:#f5f7fa;
    transition: background-color .2s;
  }
}
.el-backtop{
  --el-backtop-text-color: #00b96b;
}
:v-deep(.el-affix--fixed){
  width: 100% !important;
}
h3:nth-child(odd){
  background-color:#f5f7fa;
}
</style>