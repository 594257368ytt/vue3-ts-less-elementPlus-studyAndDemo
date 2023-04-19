<template>
  <div class="container-login">
    <form :model="form">
        <div class="login">
            <div class="header">登录</div>
            <div class="container">
                <input type="text" placeholder="请输入用户名" v-model="form.user" autocomplete="off">
                <span class="left"></span>
                <span class="right"></span>
                <span class="top"></span>
                <span class="bottom"></span>
            </div>
            <div class="container1">
                <input type="password" placeholder="请输入密码"  v-model="form.psw" autocomplete="new-password"/>
                <span class="left"></span>
                <span class="right"></span>
                <span class="top"></span>
                <span class="bottom"></span>
            </div>
            <button class="btn" type="submit" @click="loginFun">登录</button>
        </div>  
        
    </form>

  </div>

</template>

<script lang="ts">
import { reactive,  watch,  toRefs,  onMounted, ref, watchEffect} from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'login',
  props: {
    msg: String
  },
  setup() {
    const router = useRouter()
    const data = reactive({
        form:{
            user:'',
            psw:''
        }

    })
    const methods = {
      loginFun:()=>{
        if(data.form.user == 'ytt' && data.form.psw == '111') {
            router.push('/')
        }
      }
    }
    onMounted(()=>{
    })
    return {
        ...toRefs(data),
        ...methods,
    }
  }
}
</script>

<style scoped>
.container-login{
  height: 100vh;
  width: 100%;
  background-color: #353f50;
}
form{
    height: 100vh;
}
.login {
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #282c34;
}
.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
    color: #61dafb;
}
.container {
    height: 30px;
    width: 250px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background-color: #282c34;
}

input {
    width: 100%;
    height: 100%;
    position: relative;
    outline: none;
    border: none;
    box-sizing: border-box;
    padding-left: 5px;
    color: #61dafb; 
    caret-color: #61dafb;
    background: #282c34 !important;
}
input::placeholder {
    color: #61dafb;
}

span {
    position: absolute;
    content: "";
    display: block;
    background-color: #61dafb;
    transition: transform .1s ease-in-out;
}
.top,
.bottom {
    left: 0px;
    right: 0px;
    height: 2px;
}
.left,
.right {
    top: 0px;
    bottom: 0px;
    width: 2px;
    transform: scaleY(0);
}
.top {
    top: 0px;
    transform: scaleX(0);
    transform-origin: left center;
    transition-delay: .2s;
}
.left {
    left: 0px;
    transform-origin: bottom center;
    transition-delay: .3s;
}
.bottom {
    bottom: 0px;
}
.right {
    right: 0px;
    transform-origin: top center;
    transition-delay: .1s;
}
input:focus ~ .right {
    transform: scaleY(1);
    transform-origin: bottom center;
}
input:focus ~ .left {
    transform: scaleY(1);
    transform-origin: top center;
}
input:focus ~ .top {
    transform: scaleY(1);
    transform-origin: right center;
}
.container1 {
    height: 30px;
    width: 250px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.btn {
    position: absolute;
    left: 50%;
    top: 54%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 5px;
    width: 52%;
    margin-top: 40px;
    background-color: #61dafb;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
}
.btn:hover{
    background-color: #42c5e9;
}
</style>
