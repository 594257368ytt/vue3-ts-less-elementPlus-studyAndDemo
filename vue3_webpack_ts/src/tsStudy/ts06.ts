// 继承
function fun(){
    // 不能用来创建对象（不能new），专门给别人继承用的
    abstract class Animal {
        name: string
        age: number
        constructor(name: string, age: number) {
            console.log('构造函数执行了！')
            console.log('this:', this)
            this.name = name
            this.age = age
        }
        // 抽象方法（abstract）：没有方法体，必须定义在抽象类中，子类必须对抽象方法进行补充
        abstract bark(): void
    }
    class Dog extends Animal {
        bark() {
            console.log('wangang')
        }
    }
    class Cat extends Animal {
        bark() {
            console.log('miaoao')
        }
    }
    const dog = new Dog('哈士奇', 5)
    const cat = new Cat('mimi', 3)
    console.log('继承后：', dog, cat)
    cat.bark()
}
export default{ fun }