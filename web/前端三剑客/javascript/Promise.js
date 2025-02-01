/**
 * 1. Promise
Promise 是 JavaScript 中处理异步操作的一种对象，它表示一个异步操作的最终完成（或失败）及其结果值。Promise 有三种状态：

Pending（进行中）：初始状态，既不是成功，也不是失败。

Fulfilled（已成功）：表示操作成功完成。

Rejected（已失败）：表示操作失败。
 */
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

fetchData().then(data => {
    console.log(data); // Data fetched successfully!
}).catch(error => {
    console.error(error);
});
/**
async 函数返回 Promise：async 函数内部可以使用 await 关键字等待 Promise 的解决，并且 async 函数本身返回一个 Promise。

await 等待 Promise 解决：await 关键字只能在 async 函数内部使用，用于等待 Promise 的解决。await 会暂停函数的执行，直到 Promise 被解决或拒绝。

优势

更清晰的代码结构：async/await 使得异步代码看起来更像同步代码，避免了 Promise 链式调用的嵌套。

错误处理更方便：使用 try/catch 可以方便地捕获和处理异步操作中的错误。
*/
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

main();