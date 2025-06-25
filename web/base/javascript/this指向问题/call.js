Object.prototype._call = function(context,...args) {
    context = context || globalThis; // node环境下，globalThis指向全局对象，浏览器环境下，window指向全局对象
    context.fn=this;// 把当前函数赋值给context的fn属性
    const result = context.fn(...args);// 执行函数并传入参数
    delete context.fn;// 删除context的fn属性
    return result;
}
function greet(greeting) {
    return `${greeting}, my name is ${this.name}`;
}
const person = {
    name: 'Alice'
};
const message = greet._call(person, 'Hello');
console.log(message); // 输出: "Hello, my name is Alice"