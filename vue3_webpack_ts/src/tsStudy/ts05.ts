// 继承
function fun(){
    // 可以看到狗和猫的代码有大量重复的
    class Dog {
        name: string
        age: number
        constructor(name: string, age: number){
            console.log('构造函数执行了！')
            console.log('this:', this)
            this.name = name
            this.age = age
        }
        bark(){
            console.log('wangwang')
        }
    }
    const dog = new Dog('哈士奇', 5)
    console.log(dog)
    class Cat {
        name: string
        age: number
        constructor(name: string, age: number){
            console.log('构造函数执行了！')
            console.log('this:', this)
            this.name = name
            this.age = age
        }
        bark(){
            console.log('miaoao')
        }
    }
    const cat = new Cat('mimi', 3)
    console.log(cat)
    // 简洁版
    class Animal {
        name: string
        age: number
        constructor(name: string, age: number){
            console.log('构造函数执行了！')
            console.log('this:', this)
            this.name = name
            this.age = age
        }
        bark(){
            console.log('叫声')
        }
    }
    // 使Dog类继承Amimal类,子类将会拥有父类的全部属性和方法,子类还可以增加一些属性方法
    class Dog2 extends Animal {
        run(){
            console.log(`${this.name}在跑`)
        }
    }
    class Cat2 extends Animal {
        // 重写：子类和父类添加了相同的方法，子类里的新方法会覆盖子类里的旧方法
        bark() {
            console.log('miaoao')
        }
        
    }
    const dog2 = new Dog2('哈士奇', 5)
    const cat2 = new Cat2('mimi', 3)
    console.log('继承后：', dog2, cat2)
    dog2.run()
    cat2.bark()
}
export default{ fun }