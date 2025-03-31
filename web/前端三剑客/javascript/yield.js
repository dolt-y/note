/**介绍生成器 */

//常规函数只会返回一个单一值（或者不返回任何值）。而 generator 可以按需一个接一个地返回（“yield”）多个值。它们可与 iterable 完美配合使用，从而可以轻松地创建数据流。

/* 语法 yied关键字暂停 */
function * bar(){
    console.log('step 1')
    yield 1
    console.log('step 2')
    yield 2
    console.log('step 3')
    yield 3
    // 注意 如果为return 此时状态为done，for...of 循环不会捕捉到return的值，所以需要手动处理 next()
    return 4
}
const gen = bar()

for(let value of gen){
    console.log(value)
}// 输出：
// step 1
// 1
// step 2
// 2
// step 3