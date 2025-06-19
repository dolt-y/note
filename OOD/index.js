/** 基础类的定义 */
class  Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 实例方法
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    // 静态方法
    static sayBye(){
        console.log("Goodbye!");
    }
}
const person1 = new Person("John", 25);
person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
Person.sayBye(); // Output: Goodbye!

/** 继承 */
class Student extends Person{

    #password;// 私有属性
    constructor(name,age,grade,password){
        super(name,age);
        this.grade = grade;
        this.#password = password; // 私有属性
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I am in grade ${this.grade}.`);
    }
    get age(){
        return this.grade;
    }
    set age(value){
        this.grade = value;
    }
    get password(){
        return this.#password;
    }
    set password(value){
        this.#password = value;
    }
}
const student1 = new Student("Jane", 20, 12,"123456");
student1.sayHello(); // Output: Hello, my name is Jane and I am 20 years old and I am in grade 12.
student1.age = 13;
console.log(student1.age); // Output: 13
student1.password = "654321";
console.log(student1.password); // Output: 654321

/** 混入 */
const sayHiMixin = (superclass) => class extends superclass{
    sayHi(){
        console.log("Hi!");
    }
}
class PersonWithHi extends sayHiMixin(Person){
    sayHello(){
        super.sayHello();
        this.sayHi();
    }
}
const personWithHi1 = new PersonWithHi("Jack", 23);
personWithHi1.sayHello(); // Output: Hello, my name is Jack and I am 23 years old. Hi!