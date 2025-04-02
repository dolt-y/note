//原型链
function dog(name) {
    this.name = name;
    this.bark = function() {
        console.log(this.name + " 小狗!")}
}
function animal(name) {
    this.name = name;
    this.eat = function() {
        console.log(this.name + " 正在吃东西...")}
}
dog.prototype = new animal("动物");
let myDog = new dog("旺财");
myDog.bark(); // 旺财 小狗!
myDog.eat(); // 旺财 正在吃东西...