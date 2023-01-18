<template>
  <div>
    <el-row>
      <el-col :span="5" class="sidebar-container">
        <el-affix :offset="50">
          <el-menu id="leftmenu" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" >
            <template v-for="(item, index) in titleData" :key="'title' + index">
              <el-menu-item  :index="item.index + ''"   @click="positionFun(item.index)" >
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
        <Q1 class="section"/>
        <hr/>
        <Q2 class="section"/>
        <hr/>
        <Q3 class="section"/>
        <hr/>
      </el-col>
    </el-row>
      <el-backtop :right="100" :bottom="100" />
  </div>
</template>
<script lang="ts">
import Q1 from './components/question1.vue'
import Q2 from './components/question2.vue'
import Q3 from './components/question3.vue'
import { ElBacktop, ElMenu,  ElMenuItem, ElButton, ElCol, ElRow, ElAffix } from 'element-plus'
import { reactive, toRefs, onMounted, watch } from 'vue'
import  title  from './data/title'
export default {
  name: 'App',
  components: {
    Q1,
    Q2,
    Q3,
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
    })
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const methods = {
      // 获取目录数据
      getTitleData:()=>{
        console.log(title.title)
        data.titleData = title.title
      },
      positionFun:(index: string)=>{
        console.log('index :>> ', index);
        let jump:any = document.getElementsByClassName('section');
        // 获取需要滚动的距离
        let total = jump[Number(index) - 1].offsetTop;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
      },
      // 动态获取左侧菜单的宽度
      MuneResize:(data: any)=> {
        // 拿到左侧菜单父元素
        const leftDom = <HTMLElement>document.getElementById(`${data.targetId}`);
        // 拿到右侧内容父元素
        const mainContainer =
          <HTMLElement>document.getElementsByClassName("main-container")[0];
          mainContainer.style.marginLeft = leftDom.clientWidth + "px";
      },
      dataScroll: function () {
        data.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      },
      // loadSroll: function () {
      //   // var self = this;
      //   // var $navs = $(".nav1");
      //   var sections:any = document.getElementsByClassName('section');
      //   for (var i = sections.length - 1; i >= 0; i--) {
      //     if (data.scroll >= sections[i].offsetTop - 100) {
      //       $navs.eq(i).addClass("current").siblings().removeClass("current")
      //       break;
      //     }
      //   }
      // }
    }
    onMounted(()=>{
      // 显示左侧栏数据
      methods.getTitleData()
      // 监听浏览器的滚动事件，滚动后调用方法，获取滚动距离
      // window.addEventListener('scroll', methods.dataScroll);
      // 左侧栏拖拽
      // 获取dom，对左菜单进行拖拽
      var drapLine = <HTMLElement>document.getElementById("drap-meuline");
      // 获取右侧内容Dom
      var mainContainer = <HTMLElement>document.getElementsByClassName("main-container")[0];
      // 获取左侧菜单Dom
      var menuleft = <HTMLElement>document.getElementById("leftmenu");
      // 获取左侧菜单Dom父元素，为了动态设置宽度
      var sidebarWidth = <HTMLElement>document.getElementsByClassName("sidebar-container")[0];

      drapLine.onmousedown = function (e) {
        // 设置最大/最小宽度
        var max_width = 600;
        var min_width = 150;
        let mouse_x = 0; // 记录鼠标相对left盒子x轴位置
        e.preventDefault(); // 阻止默认事件
        const _e = e || window.event;
        mouse_x = _e.clientX - menuleft.offsetWidth;
        document.onmousemove = function (e_) {
          console.log(min_width, max_width);
          const _e_ = e_ || window.event;
          let left_width = _e_.clientX - mouse_x;
          left_width = left_width < min_width ? min_width : left_width;
          left_width = left_width > max_width ? max_width : left_width;
          sidebarWidth.style.width = left_width + "px";
          sidebarWidth.style.width = left_width + "px";
          // mainContainer.style.marginLeft = left_width + "px";
          sidebarWidth.style.flex = '0 0 '+ left_width + "px";
          sidebarWidth.style.maxWidth = '600px'
          console.log('object :>> ',left_width);
        };
        document.onmouseup = function (e) {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    })
    watch(() => data.scroll, () => {
      // methods.loadSroll()
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 50px;
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
    cursor: e-resize; //设置鼠标悬浮上去显示可拖拽样式
    float: right;
    top: 50vh;
  }
  #leftmenu{
    max-width: 600px;
  }
  .el-col-19{
    flex:1
  }
  .el-col-5{
    flex:0 0 150px;
    max-width: 600px;
  }
  .el-menu-item{
    border-radius: 10px;
  }
  .el-menu-item.is-active{
    background: #00b96cc7;   
    .adide-content{
      color: #262626d2;
      font-weight: 800;
      margin-left: 0;
      text-align: left;
    }
  }
  .adide-content{
    color: #262626a9;
  }
  .el-affix{
    margin-top: 50px;
  }
}
</style>