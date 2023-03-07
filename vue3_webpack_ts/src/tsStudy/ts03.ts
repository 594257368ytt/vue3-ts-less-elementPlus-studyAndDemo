// 类的知识点
function fun(){
    class Person{
        // 实例属性: 通过对象的实例访问
        name: string = 'ytt'
        // 静态属性（static）:可以直接用Person.age调用
        static age: number = 18
        // 只读属性 (readonly)
        readonly stature: number = 155
        // 静态只读属性 (static readonly)
        static readonly nationality = 'China'
        // 方法加static可以直接通过类调用，不加实例调用
        sayHello(){
            console.log('hello, class ts')
        }
        static sayNo(){
            console.log('no')
        }
    }
    const per = new Person()
    // per.stature = 160 报错
    console.log('ts类：', per.name, Person.age , per.sayHello, Person.sayNo)
}
export default{ fun }

