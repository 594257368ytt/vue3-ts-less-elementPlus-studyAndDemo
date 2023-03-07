import { th } from "element-plus/es/locale";

// 泛型: 定义函数或类时，类型不明确时
function fun(a: number): number{
    return a
}
//T在这里是一个泛型，执行的时候才知道是什么类型，说明传参和返回值类型相同，叫什么名字都可以<T>就是定义T是泛型，所以后面才可以用T
function fun1<T>(a: T): T{
    return a
}
fun1(10)  // 不指定泛型是什么
fun1<string>('')  // 指定泛型是string
// 可以指定多个泛型
function fun2<T, K>(a: T, b: K){
    console.log('b :>> ', b);
    return a
}
fun2(1, 2)
// 让泛型继承一个接口
interface Inter{
    length: number
}
// T的范围是Inter子类
function fn3<T extends Inter>(a: T): number{
    return a.length
}
class inter implements Inter{
    length: 1
}
// fn3传的参数必须是Inter实现类
fn3(inter)
// 类的属性定义为泛型
class MyClass<T>{
    name: T
    constructor(name: T){
        this.name = name
    }
}
// 定义的时候不确定类型，传值的时候自动确定name是字符串
const mc = new MyClass('aaaa')
export default{ fun }
