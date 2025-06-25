/* js 逻辑运算符 */

// !! 在 JavaScript 中，!! 是一种常用的逻辑运算符组合，用于将一个值转换为布尔值。
// 它的工作原理是通过两次取反来实现的。以下是对 !! 的详细解释和示例。单个 ! 运算符：逻辑非运算符 ! 会将一个值转换为布尔值并取反。
// 例如，!true 变为 false，!false 变为 true，!0 变为 true，!1 变为 false。
// 双重取反 !!：使用 !! 可以将任何值转换为布尔值。第一次 ! 将值转换为布尔值并取反，第二次 ! 再次取反，最终得到原始值的布尔表示。

const value1 = 0;
const value2 = 1;
const value3 = "Hello";
const value4 = null;
const value5 = undefined;
const value6 = NaN;

console.log(!!value1); // false
console.log(!!value2); // true
console.log(!!value3); // true
console.log(!!value4); // false
console.log(!!value5); // false
console.log(!!value6); // false


// 逻辑运算符：&&、||、!
// && 运算符：两者都为真，结果才为真。
// || 运算符：两者有一个为真，结果就为真。
// ! 运算符：取反。



//可选链 ?. 是一种访问嵌套对象属性的安全的方式。即使中间的属性不存在，也不会出现错误。

// 示例：
const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
  }
};

console.log(person?.address?.city); // "New York"
console.log(person?.address?.country); // undefined
console.log(person?.phone); // undefined
console.log(person?.address?.country); // undefined

// 注意：?. 运算符只能在 ES2020 及以上版本中使用。


// 合并空值运算符 由于它对待 null 和 undefined 的方式类似，所以在本文中我们将使用一个特殊的术语对其进行表示。
// 为简洁起见，当一个值既不是 null 也不是 undefined 时，我们将其称为“已定义的（defined）”。
// a ?? b 的结果是：
//如果 a 是已定义的，则结果为 a，
//如果 a 不是已定义的，则结果为 b。
//换句话说，|| 无法区分 false、0、空字符串 "" 和 null/undefined。
//它们都一样 —— 假值（falsy values）。如果其中任何一个是 || 的第一个参数，那么我们将得到第二个参数作为结果。
//不过在实际中，我们可能只想在变量的值为 null/undefined 时使用默认值。也就是说，当该值确实未知或未被设置时。

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

