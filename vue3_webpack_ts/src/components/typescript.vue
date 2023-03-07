<template>
  <div class="question5">
    <h1>ts知识</h1>
    <el-button type="primary" @click="aboutClass.fun()">点击显示类中的属性方法</el-button><br>
    <el-button type="primary" @click="constructor.fun()" style="margin-top: 5px">点击显示构造函数</el-button><br>
    <el-button type="primary" @click="inherit.fun()" style="margin-top: 5px">点击显示继承函数</el-button><br>
    <el-button type="primary" @click="abstractClass.fun()" style="margin-top: 5px">点击显示抽象类</el-button><br>
    <el-button type="primary" @click="interfaceClass.fun()" style="margin-top: 5px">点击显示接口</el-button><br>
    <el-button type="primary" @click="encapsulation.fun()" style="margin-top: 5px">点击属性封装</el-button><br>
    <el-button type="primary" @click="generic.fun()" style="margin-top: 5px">点击泛型</el-button><br>
  </div>
</template>

<script lang="ts">
import aboutClass from '../tsStudy/ts03'
import constructor from '../tsStudy/ts04'
import inherit from '../tsStudy/ts05'
import abstractClass from '../tsStudy/ts06'
import interfaceClass from '../tsStudy/ts07'
import encapsulation from '../tsStudy/ts08'
import generic from '../tsStudy/ts09'

export default {
  name: 'typescript',
  setup() {
    return {
        aboutClass,
        constructor,
        inherit,
        abstractClass,
        interfaceClass,
        encapsulation,
        generic
    }
  }
}
</script>

<style scoped>
.question5 {
  width: 100%;
  background-color:cornflowerblue;
}
</style>
