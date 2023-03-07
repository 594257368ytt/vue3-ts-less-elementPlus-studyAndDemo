// 严格检查空值
//这种情况box1可能是空值，可以先判断喂不为空，也可以用？判断
let box1 = document.getElementById("aaa")
if(box1 !==null){
    box1.addEventListener('click',function(){
        return 0
    })
}
box1?.addEventListener('click',function(){
    return 0
})