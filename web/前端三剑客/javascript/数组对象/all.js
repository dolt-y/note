// 数组操作方法
// 1. 添加和删除元素
// push(element): 在数组末尾添加一个或多个元素，并返回新数组的长度。

// pop(): 删除数组末尾的元素，并返回该元素。

// unshift(element): 在数组开头添加一个或多个元素，并返回新数组的长度。

// shift(): 删除数组开头的元素，并返回该元素。
let arr1 = [1, 2, 3];
arr.push(4); // arr: [1, 2, 3, 4]
arr.pop(); // arr: [1, 2, 3]
arr.unshift(0); // arr: [0, 1, 2, 3]
arr.shift(); // arr: [1, 2, 3]
// 2. 查找元素
// indexOf(element): 返回元素在数组中首次出现的索引，如果不存在则返回 -1。

// lastIndexOf(element): 返回元素在数组中最后一次出现的索引，如果不存在则返回 -1。

// includes(element): 判断数组是否包含某个元素，返回 true 或 false。


let arr2 = [1, 2, 3, 2];
console.log(arr.indexOf(2)); // 1
console.log(arr.lastIndexOf(2)); // 3
console.log(arr.includes(3)); // true
// 3. 遍历数组
// forEach(callback): 对数组中的每个元素执行一次回调函数。

// map(callback): 创建一个新数组，其结果是原数组中的每个元素调用回调函数后的返回值。

// filter(callback): 创建一个新数组，包含原数组中所有通过回调函数测试的元素。

// reduce(callback, initialValue): 对数组中的每个元素执行回调函数，返回一个累积的结果。


let arr3 = [1, 2, 3];
arr.forEach(item => console.log(item)); // 1 2 3

let doubled = arr.map(item => item * 2); // [2, 4, 6]
let filtered = arr.filter(item => item > 1); // [2, 3]
let sum = arr.reduce((acc, item) => acc + item, 0); // 6

// 4. 其他常用方法
// slice(start, end): 返回从 start 到 end（不包括 end）的子数组。

// splice(start, deleteCount, ...items): 从 start 开始删除 deleteCount 个元素，并插入 items。

// concat(array): 合并两个或多个数组，返回一个新数组。

// join(separator): 将数组中的所有元素连接成一个字符串，元素之间用 separator 分隔。


let arr4 = [1, 2, 3, 4];
let subArray = arr.slice(1, 3); // [2, 3]
arr.splice(1, 2, 5, 6); // arr: [1, 5, 6, 4]
let newArray = arr.concat([7, 8]); // [1, 5, 6, 4, 7, 8]
let str = arr.join('-'); // "1-5-6-4"
// 对象操作方法
// 1. 添加和删除属性
// obj.property = value: 添加或修改对象的属性。

// delete obj.property: 删除对象的属性。


let obj = { name: 'Alice', age: 30 };
obj.city = 'New York'; // obj: { name: 'Alice', age: 30, city: 'New York' }
delete obj.age; // obj: { name: 'Alice', city: 'New York' }
// 2. 遍历对象
// for...in: 遍历对象的所有可枚举属性。

// Object.keys(obj): 返回对象所有可枚举属性的数组。

// Object.values(obj): 返回对象所有可枚举属性值的数组。

// Object.entries(obj): 返回对象所有可枚举属性和值的数组，每个元素是一个包含属性名和属性值的数组。


let obj = { name: 'Alice', age: 30 };
for (let key in obj) {
    console.log(key, obj[key]); // name Alice, age 30
}

console.log(Object.keys(obj)); // ['name', 'age']
console.log(Object.values(obj)); // ['Alice', 30]
console.log(Object.entries(obj)); // [['name', 'Alice'], ['age', 30]]
// 3. 对象的合并和复制
// Object.assign(target, ...sources): 将一个或多个源对象的属性复制到目标对象，返回目标对象。

// {...obj}: 使用对象展开运算符复制对象。


let obj1 = { name: 'Alice' };
let obj2 = { age: 30 };
let merged = Object.assign({}, obj1, obj2); // { name: 'Alice', age: 30 }
let copied = { ...obj1 }; // { name: 'Alice' }
// 4. 对象的冻结和密封
// Object.freeze(obj): 冻结对象，使其不能添加、删除或修改属性。

// Object.seal(obj): 密封对象，使其不能添加或删除属性，但可以修改现有属性。
let obj = { name: 'Alice' };
Object.freeze(obj);
obj.age = 30; // 无效
delete obj.name; // 无效
obj.name = 'Bob'; // 无效

let sealedObj = { name: 'Alice' };
Object.seal(sealedObj);
sealedObj.age = 30; // 无效
delete sealedObj.name; // 无效
sealedObj.name = 'Bob'; // 有效