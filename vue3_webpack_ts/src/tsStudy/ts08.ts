// 属性的封装
function fun(){
    class Person {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        getName() {
            return this.name
        }
        //或者可以这样写,前面加get关键词证明是一个get存取器
        get namefn(){
            return this.name
        }
        setName(value: string) {
            this.name = value
        }
        set namefn(value: string){
            this.name = value
        }
    }
    const per = new Person('ytt', 18)
    console.log('get方法调用 per :>> ', per, per.getName());
    
    per.setName('zhuzhu')
    console.log('set方法调用 per.name :>> ', per.name);

    // 存取器调用,像调用属性一样
    console.log('存取器get调用 per.name :>> ', per.namefn);
    per.namefn = 'guodong'
    console.log('存取器set调用 per:>> ', per);
    // 私有属性，继承后的子类不能访问
    class A {
        private num: number;
        protected num2: number;
        constructor(num:number){
            this.num = num 
        }
    }
    class B extends A {
        test(){
            // console.log('this.num :>> ', this.num); 报错
            console.log('this.num2 :>> ', this.num2);
        }
    }
    //构造函数语法糖
    class C {
        constructor(public name: string, public ahe: number){
            
        }
    }
}
export default{ fun }