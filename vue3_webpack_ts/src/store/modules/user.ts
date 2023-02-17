export default {
    namespaced: true,
    state(){
        return{
            // 用户信息，与服务端接口返回一致
            profile:{
                id:'',
                avatar:'', // 用户头像
                nickname:'', // 昵称
                account:'', // 用户账号名称
                mobile:'', // 手机号
                token:'' // token数据
            }
        }
    },
    mutations:{
        setUser(state, payload){
            state.profile = payload
        }
    }
}