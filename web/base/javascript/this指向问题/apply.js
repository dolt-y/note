Object.prototype._apply = function (context, args) {
    // 如果 context 为 null 或 undefined，则将其指向全局对象
    context = context || globalThis; // 在浏览器中是 window，在 Node.js 中是 global
    // 将当前函数作为 context 的一个方法
    context.fn = this;
    // 调用该方法并传递参数
    const result = context.fn(...(args || [])); // 使用展开运算符传递参数
    delete context.fn;
    return result;

}
function greet(greeting, punctuation) {
    return `${greeting}, my name is ${this.name}${punctuation}`;
}

const person = {
    name: 'Alice'
};

// 使用手写的 _apply 函数
const message = greet._apply(person, ['Hello', '!']);
console.log(message); // 输出: "Hello, my name is Alice!"