// import { IfNever } from "element-plus/es/utils"

// 声明a，类型只能是数字，赋值其他的会报错
let a: number
a = 10
// 如果没有注明类型，类型会固定为，他声明时赋值的类型
let b: string = ''
let c =''
// 函数参数类型声明 以及 返回值类型
function sum( a: number, b: number ): number{
    return a + b
}
sum( 1 , 2 )
// 字面量进行类型声明，声明d只能等于10，也可以限制只能用这几个值
let d: 10 
let e: 'miao' | 'wang'
// any是设置任意类型，相当于关闭ts类型检测，甚至还可以赋值给任意类型，不建议用
// 声明不赋值，相当于any，不建议
// 建议未知类型的值，设置为unknown，自身可以赋值任意类型，但是不能直接赋值其他变量，想要复制必须类型检查
let f: any
f = 'haha'
a = f 

let g

let h: unknown
h = true
h = 'hello'
// b = h  报错
if( typeof h === 'string' ){
    b = h
}
// 类型断言，告诉b这个unknown就是字符串
b = h as string
b = <string> h
// 函数没有返回值，不写自动判断为any
function fn(){
    // return 
}
function fn2( num ){
    if( num > 0 ){
        return 123
    }else{
        return '123'
    }
}
function fn3(): void{
    return
    // return 1 返回 报错
}
// never表示永远不会返回结果，连空都没有
function fn4(): never{
    throw new Error( '报错了' )
}
// 指定对象，建议第二种，可以指定对象里面有哪些属性。
let i: object
let j: { name: string }
// j = {} 会报错，因为j里面必须要有name属性
// j = {name: '111' , age:111}  也会报错，结构必须与他一模一样
// 可有可无的属性可以加一个问号
let k: { name: string , age?: number }
k = { name: '' , age :1 }
k = { name: '' }
// 设置name属性必须有，其他任意类型的属性随便添加
let l: { name: string , [propName: string]: any }
l = { name: '' , age: 1 , gender: '男' }
// 定义一个函数，设置它参数的类型，返回值类型，参数的数量类型必须完全一致
let m: ( a: number, b: number ) => number
m = function ( n1: number, n2: number ){
   return n1 + n2 
}
// 声明一个数组，数组里面都是一个类型的数据
let n: string[]
n = ['1', '2', '3']
let o: Array<number>
o = [1, 2, 3]
// 元组：固定长度的数组
let p: [string, string]
// p = ['1', '2', '3'] 只嗯呢该放两个值，放三个会报错
// 枚举，相当于给一些可能的情况是有限的数据，男的是0，女的是1，但是并不知道0,1具体代表的是什么，就可以用枚举，它的属性名就可以明确知道0,1代表什么
enum Gender {
    Male = 0,
    Female = 1
}
let q: { name: string, gender: Gender }
q = {
    name: '',
    gender: Gender.Male
}
console.log(q.gender === Gender.Male)
// &表示同时满足
let r: { name: string } & { age: number }
r = { name: '', age: 1 }
// 自定义类型，类型别名
type myType = 1 | 2 | 3 | 4 | 5
let s: 1 | 2 | 3 | 4 | 5
let t : myType
t = 1
// t = 6 报错
