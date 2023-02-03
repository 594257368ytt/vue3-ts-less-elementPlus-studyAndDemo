<template>
  <div class="question3">
    <h1>ref、toRef、toRefs区别</h1>
    <h2>1、使用Ref显示:<br/>
      <span class="row-data">原始数据：{{ refData }}</span><br>
      <span class="ref-data">Ref后的数据：{{ data }}</span><br>
    </h2>
    <el-button type="primary" @click="add">点击ref +1</el-button>

    <h2>2、使用toRef显示:<br>
      <span class="row-data">原始数据：{{ data2 }}</span><br>
      <span class="ref-data">toRef后的数据：{{ data2 }}</span><br>
    </h2>
    <el-button type="primary" @click="add2">点击toRef +1</el-button>

    <h2>3、使用toRefs + 解构表达式:<br>
      <span class="row-data">原始数据：{{ psw }}</span><br>
      <span class="ref-data">toRefs后的数据：{{ psw }}</span><br>
    </h2>
    <el-button type="primary" @click="add3">点击toRefs解构写法 +1</el-button>

    <h2>4、使用toRefs + return中不使用拓展运算符:<br>
      <span class="row-data">原始数据：{{ data4.psw }}</span><br>
      <span class="ref-data">toRefs后的数据：{{ data4.psw }}</span><br>
    </h2>
    <el-button type="primary" @click="add4">点击toRefs整个赋值 +1</el-button>

    <h2>5、普通对象 + return中使用拓展运算符：不用解构不能直接使用。解构c,d直接可以使用<br>
      <span class="row-data">不解构不能直接使用a,b：{{ data5.a }}</span><br>
      <span class="ref-data">解构后能直接用c,d：{{ c }} {{ d }}</span><br>
    </h2>
    <!-- data7中de e.f被解构成toRef -->
    <h2>6、toRefs + 在return中使用拓展运算符：data7中de e.f被解构成toRef，属性可以直接使用<br>
      <span class="ref-data">原数据,return解构c,d：{{ e }} {{ f }}</span><br>
    </h2>

    <h2>7、Reactive封装数据 + 正常return数据：数据不能响应<br>
      <span class="row-data">原数据 {{ room }}</span><br>
      <span class="ref-data">Reactive封装后的数据：{{ room }}</span><br>
    </h2>
    <el-button type="primary" @click="add5">点击Reactive +1</el-button>

    <h2>8、Reactive封装数据 + 用toRefs return数据：数据可以响应<br>
      <span class="row-data">原数据 {{ room2 }}</span><br>
      <span class="ref-data">Reactive封装后的数据：{{ room2 }}</span><br>
    </h2>
    <el-button type="primary" @click="add6">点击Reactive + toRefs +1</el-button>
    
    <h2>9、使用toRef显示:<br>
      <span class="row-data">原始数据：{{ g }}</span><br>
      <span class="ref-data">toRef后的数据：{{ g }}</span><br>
    </h2>
    <el-button type="primary" @click="add7">点击toRef +1</el-button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, toRef, ref } from 'vue'
export default {
  name: 'Question3',
  props: {
    msg: String
  },
  setup() {
    let refData = 0
    let refData2 =  {name : '我是原始对象的name属性', age : 12}
    let refData3 =  {user : '我是原始对象的name属性', psw : 123123}
    let refData4 =  {user : '我是原始对象的name属性', psw : 123123}

    let data = ref(refData)
    let data2 = toRef(refData2, 'age')
    console.log('data, data2 :>> ', data, data2);
    let {user, psw} = toRefs(refData3)   // 第三种情况，把psw解构出来
    let data4 =  toRefs(refData4)
    const data5 = {
      a:1,
      b:2,
    }
    const data6 = {
      c:3,
      d:4
    }
    const data7 = toRefs({
      e:5,
      f:6
    })
    const data8 = {
      g:1,
      h:2,
    }
    console.log('data6 :>> ', data6);
    console.log('data7 :>> ', data7);

    let retData = {teacher:'wang',room:201}
    let reactiveData = reactive(retData)
    console.log('reactiveData :>> ', reactiveData);
    let retData2 = {teacher2:'wang',room2: 550}
    let reactiveData2 = reactive(retData2)
    console.log('reactiveData2 :>> ', reactiveData2);

    const methods = {
      add:()=>{
        data.value++
      },
      add2:()=>{
        data2.value++
        console.log('data2 :>> ', data2.value, data2);
      },
      add3:()=>{
        psw.value++
        console.log('psw.value :>> ', psw.value);
      },
      add4:()=>{
        data4.psw.value++
        console.log('data4.psw.value :>> ', data4.psw.value, data4);
      },
      add5:()=>{
        reactiveData.room++
        console.log('reactiveData :>> ', reactiveData);
      },
      add6:()=>{
        reactiveData2.room2++
        console.log('reactiveData2 :>> ', reactiveData2 );
        console.log('toRefs(reactiveData2) :>> ', toRefs(reactiveData2));
      },
      add7:()=>{
        data8.g++
        console.log('data8.g :>> ', data8.g);
      }
    }
    return {
        refData,
        data,
        data2,
        data4,
        psw,
        data5,
        ...data6,
        ...data7,
        ...reactiveData,
        ...toRefs(reactiveData2),
        ...toRefs(data8),
        ...methods,
    }
  }
}
</script>

<style scoped lang="less">
.question3 {
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
