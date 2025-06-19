/** setTimeout 用法 */
// setTimeout(function, delay, arg1, arg2, ...)
// 第一个参数是函数，第二个参数是延迟时间，后面的参数是传递给函数的参数。

// 例子：
function sayHello(args) {
  console.log(args);
}

setTimeout(sayHello, 2000,"Hello, world!"); 
