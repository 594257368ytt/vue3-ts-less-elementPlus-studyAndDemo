// 构造函数
function fun(){
    // 普通的类定义的属性，所有实例公用，如果想定义不同市里的四有数行，就要使用类中的构造函数
    class Dog{
        name = "wangcai"
        age = 3
        bark(){
            console.log('wangwang')
        }
    }
    const dog1_1 = new Dog()
    const dog1_2 = new Dog()

    // 构造函数会在对象创建时调用（new）
    class Dog2{
        name: string
        age: number
        constructor(name: string, age: number){
            console.log('构造函数执行了！')
            console.log('this:', this)
            this.name = name
            this.age = age
        }
        bark(){
            // 不同实例调用的是不同的bark
            console.log('this：', this)
        }
    }
    // 属性要通过构造函数才能私有
    const dog2_1 = new Dog2('旺财', 3)
    const dog2_2 = new Dog2('小白', 2)
    // 函数直接就是私有的
    console.log(dog1_1, dog1_2, dog2_1, dog2_2)
    dog2_1.bark()
    dog2_2.bark()
}
export default{ fun }