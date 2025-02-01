let obj1 = { a: 1, b: 2 };
let obj2 = obj1; // 直接赋值

obj2.a = 3;
console.log(obj1.a); // 3
console.log(obj2.a); // 3

let obj3 = { a: 1, b: { c: 2 } };
let obj4 = JSON.parse(JSON.stringify(obj1)); // 使用 JSON 方法进行深拷贝 object.assign() 也可以
// 浅拷贝是创建一个新的对象或数组，并将原始对象或数组的元素复制到新对象或数组中。浅拷贝只会复制对象或数组的第一层属性，
// 而不会递归复制嵌套对象或数组。因此，如果原始对象或数组包含嵌套对象或数组，浅拷贝后的新对象或数组仍然会引用原始嵌套对象或数组。
obj3.a = 3;
obj3.b.c = 4;

console.log(obj3.a); // 1
console.log(obj4.a); // 3

console.log(obj3.b.c); // 2
console.log(obj4.b.c); // 4
// 直接赋值：两个变量指向同一个内存地址，修改一个变量会影响另一个变量。

// 浅拷贝：创建一个新的对象或数组，复制第一层属性，但嵌套对象或数组仍然共享引用。

// 深拷贝：创建一个完全独立的副本，包括所有嵌套对象或数组。