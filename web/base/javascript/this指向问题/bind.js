//bind 用法
function greet(greeting) {
    return `${greeting}, my name is ${this.name}`;
}

const person = {
    name: 'Alice'
};

// 使用 bind 创建一个新函数
const greetAlice = greet.bind(person);

// 调用新函数
const message = greetAlice('Hello');
console.log(message); // 输出: "Hello, my name is Alice"

// 手写实现一个bind

Function.prototype._bind = function(context, ...args) {
    const fn = this; // 保存原始函数的引用

    return function(...newArgs) {
        // 在调用新函数时，使用指定的 context 作为 this，并合并 args 和 newArgs
        return fn.apply(context, [...args, ...newArgs]);
    };
};

const greetAlice2 = greet._bind(person);
const message2 = greetAlice2('Hello');
console.log(message2); // 输出: "Hello, my name is Alice"