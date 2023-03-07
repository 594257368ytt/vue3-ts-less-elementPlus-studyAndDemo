// 接口知识点
function fun(){
    // 定义类结构，类多值少值都不行,同时可以当做类型声明使用,类型声明不可重复定义，接口可以，重复定义，是两个接口叠加，主要用来限制类结构，只能是定义结构不能有实际值
    type myType = {
        name: string
        age: number
    }
    interface myInterface{
        name: string
        age: number
        sayHello():void
    }
    interface myInterface{
        gender: string 
    }
    const obj: myInterface ={
        name: 'aaa',
        age: 13,
        gender: '男',
        sayHello(){}
    }
    console.log('obj :>> ', obj);
    // 实现接口
    class myClass implements myInterface{
        name: string
        age: number
        gender = '男'
        constructor(name: string){
            name = this.name
        }
        sayHello(){
            console.log("hello", this.name)
        }
    }
    const class_ = new myClass('ytt')
    console.log('class :>> ', class_)

}
export default{ fun }