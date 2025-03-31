/* ?深入理解async/await */

/* 
通过 async定义的函数，返回的是一个 Promise 对象。
**/

// async function foo() {
//     return 1;
// }

// console.log(foo()); // Promise {<resolved>: 1}

// 接下来分析await关键字的作用。

/* 
await 关键字只能在 async 函数中使用，作用是等待一个 Promise 对象，直到该 Promise 对象 resolve 或者 reject。
**/
// async function bar() {
//     const result = await Promise.resolve(1);
// }

/**ok 接下来模拟async/await的执行过程 */

function asyncGenerator(func) {
    return function (...args) {
        const gen = func(...args);
        function handleNext(result) {
            if (result.done) {
               return Promise.resolve(result.value);
            }
            return Promise.resolve(result.value).then(res=>{
                return handleNext(gen.next(res));
            }).catch(err=>{
                return handleNext(gen.throw(err));
            });
        }
        return handleNext(gen.next());// 简写，正常这里需要捕捉异常
    }
}
const mockAsyncFunc = asyncGenerator(function* () {
    try {
        const result1 = yield Promise.resolve(1);
        console.log(result1);
        const result2 = yield Promise.resolve(2);
        console.log(result2);
        const result3 = yield Promise.resolve(3);
        console.log(result3);
        return 4;
    } catch (err) {
        console.log(err);
    }
});
mockAsyncFunc().then(res => { console.log(res); })

/*? 流程分析 */
/**
 * 1. 调用 mockAsync() 
   │
   ▼
生成器开始执行，遇到第一个 yield，返回 PromiseA
   │
   ▼
执行器等待 PromiseA 完成
   │
   ▼
PromiseA 完成（1秒后），结果 "Hello" 传回生成器
   │
   ▼
生成器恢复执行，打印 "Hello"，遇到第二个 yield，返回 PromiseB
   │
   ▼
执行器等待 PromiseB 完成
   │
   ▼
PromiseB 完成（0.5秒后），结果 "World" 传回生成器
   │
   ▼
生成器恢复执行，打印 "World"，返回最终结果 "All done!"
 * 
 */