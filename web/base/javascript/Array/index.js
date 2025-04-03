/* ====================== JavaScript 数组方法全面笔记 ====================== */

/* ---------------------- 1. 数组创建 ---------------------- */

// 1.1 使用字面量创建数组（推荐）
const arr1 = [1, 2, 3]; // 创建一个包含 1, 2, 3 的数组

// 1.2 使用构造函数创建数组
const arr2 = new Array(1, 2, 3); // 创建一个包含 1, 2, 3 的数组
const arr3 = new Array(5); // 创建一个长度为 5 的空数组

// 1.3 使用 Array.of() 创建数组（解决 new Array() 的歧义问题）
const arr4 = Array.of(1, 2, 3); // 创建一个包含 1, 2, 3 的数组

// 1.4 使用 Array.from() 从类数组对象或可迭代对象创建数组
const arr5 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const arr6 = Array.from({ length: 3 }, (v, i) => i); // [0, 1, 2]

/* ---------------------- 2. 数组长度 ---------------------- */

// 2.1 获取数组长度
console.log(arr1.length); // 3

// 2.2 设置数组长度
arr1.length = 5; // 将数组长度扩展为 5，新增元素为 undefined
console.log(arr1); // [1, 2, 3, undefined, undefined]

/* ---------------------- 3. 数组遍历 ---------------------- */

// 3.1 使用 for 循环遍历
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]); // 依次输出 1, 2, 3, undefined, undefined
}

// 3.2 使用 forEach() 方法遍历
arr1.forEach((item, index) => {
  console.log(`索引 ${index} 的值是 ${item}`);
});

// 3.3 使用 for...of 循环遍历
for (let item of arr1) {
  console.log(item); // 依次输出 1, 2, 3, undefined, undefined
}

// 3.4 使用 keys() 方法遍历索引
for (let index of arr1.keys()) {
  console.log(index); // 依次输出 0, 1, 2, 3, 4
}

// 3.5 使用 values() 方法遍历值
for (let value of arr1.values()) {
  console.log(value); // 依次输出 1, 2, 3, undefined, undefined
}

// 3.6 使用 entries() 方法遍历索引和值
for (let [index, value] of arr1.entries()) {
  console.log(`索引 ${index} 的值是 ${value}`);
}

/* ---------------------- 4. 数组操作 ---------------------- */

// 4.1 push() - 向数组末尾添加元素
arr1.push(4); // [1, 2, 3, undefined, undefined, 4]

// 4.2 pop() - 移除并返回数组的最后一个元素
const lastItem = arr1.pop(); // 4, arr1 变为 [1, 2, 3, undefined, undefined]

// 4.3 unshift() - 向数组开头添加元素
arr1.unshift(0); // [0, 1, 2, 3, undefined, undefined]

// 4.4 shift() - 移除并返回数组的第一个元素
const firstItem = arr1.shift(); // 0, arr1 变为 [1, 2, 3, undefined, undefined]

// 4.5 splice() - 在指定位置插入或删除元素
arr1.splice(1, 0, 5); // 在索引 1 处插入 5，arr1 变为 [1, 5, 2, 3, undefined, undefined]

// 4.6 concat() - 合并数组
const newArr = arr1.concat([6, 7]); // [1, 5, 2, 3, undefined, undefined, 6, 7]

// 4.7 join() - 将数组转换为字符串
const str1 = arr1.join('-'); // "1-5-2-3--"

// 4.8 reverse() - 反转数组
arr1.reverse(); // [undefined, undefined, 3, 2, 5, 1]

// 4.9 sort() - 对数组进行排序
arr1.sort(); // [1, 2, 3, 5, undefined, undefined]

// 4.10 fill() - 用指定值填充数组
arr1.fill(0, 2, 4); // 从索引 2 到 4 填充 0，arr1 变为 [1, 2, 0, 0, undefined, undefined]

// 4.11 copyWithin() - 复制数组的一部分到同一数组的另一个位置
arr1.copyWithin(0, 3, 5); // 将索引 3 到 5 的元素复制到索引 0 开始的位置

// 4.12 flat() - 将嵌套数组扁平化
const flattened = [1, [2, [3]]].flat(2); // [1, 2, 3]

// 4.13 flatMap() - 先 map() 再 flat(1)
const flatMapped = [1, 2, 3].flatMap(item => [item * 2]); // [2, 4, 6]

/* ---------------------- 5. 数组查找 ---------------------- */

// 5.1 indexOf() - 查找元素的第一个索引
const index = arr1.indexOf(2); // 1

// 5.2 lastIndexOf() - 查找元素的最后一个索引
const lastIndex = arr1.lastIndexOf(0); // 3

// 5.3 find() - 查找第一个满足条件的元素
const foundItem = arr1.find(item => item > 1); // 2

// 5.4 findIndex() - 查找第一个满足条件的元素的索引
const foundIndex = arr1.findIndex(item => item > 1); // 1

// 5.5 includes() - 判断数组是否包含指定元素
const isIncluded = arr1.includes(2); // true

/* ---------------------- 6. 数组转换 ---------------------- */

// 6.1 map() - 对数组元素进行转换
const doubled = arr1.map(item => item * 2); // [2, 4, 0, 0, NaN, NaN]

// 6.2 filter() - 过滤数组元素
const filtered = arr1.filter(item => item > 1); // [2]

// 6.3 reduce() - 将数组元素累积为单个值
const sum = arr1.reduce((prev, curr) => prev + curr, 0); // 3

// 6.4 reduceRight() - 从右到左累积数组元素
const product = arr1.reduceRight((prev, curr) => prev * curr, 1); // 0

// 6.5 toString() - 将数组转换为字符串
const str2 = arr1.toString(); // "1,2,0,0,,"

// 6.6 toLocaleString() - 将数组转换为本地化字符串
const str3 = arr1.toLocaleString(); // "1,2,0,0,,"

/* ---------------------- 7. 数组判断 ---------------------- */

// 7.1 some() - 判断是否有元素满足条件
const hasPositive = arr1.some(item => item > 0); // true

// 7.2 every() - 判断是否所有元素都满足条件
const allPositive = arr1.every(item => item > 0); // false

// 7.3 Array.isArray() - 判断是否为数组
const isArray1 = Array.isArray(arr1); // true

/* ---------------------- 8. 其他方法 ---------------------- */

// 8.1 slice() - 返回数组的浅拷贝
const sliced = arr1.slice(1, 3); // [2, 0]

// 8.2 at() - 获取指定索引的元素（支持负数索引）
const item = arr1.at(-1); // undefined

// 8.3 with() - 返回一个新数组，修改指定索引的值（ES2023）
const newArr2 = arr1.with(1, 10); // [1, 10, 0, 0, undefined, undefined]

// 8.4 toReversed() - 返回反转后的新数组（ES2023）
const reversedArr = arr1.toReversed(); // [undefined, undefined, 0, 0, 2, 1]

// 8.5 toSorted() - 返回排序后的新数组（ES2023）
const sortedArr = arr1.toSorted(); // [0, 0, 1, 2, undefined, undefined]

// 8.6 toSpliced() - 返回删除或插入元素后的新数组（ES2023）
const splicedArr = arr1.toSpliced(1, 2, 10, 11); // 在索引 1 处删除 2 个元素，并插入 10 和 11

// 8.7 group() - 根据条件分组（ES2023）
const grouped = arr1.group(item => item > 1 ? 'greater' : 'less'); // { greater: [2], less: [1, 0, 0] }

// 8.8 groupToMap() - 根据条件分组并返回 Map（ES2023）
const groupedMap = arr1.groupToMap(item => item > 1 ? 'greater' : 'less'); // Map { 'greater' => [2], 'less' => [1, 0, 0] }

// 8.9 findLast() - 查找最后一个满足条件的元素（ES2023）
const lastFoundItem = arr1.findLast(item => item > 1); // 2

// 8.10 findLastIndex() - 查找最后一个满足条件的元素的索引（ES2023）
const lastFoundIndex = arr1.findLastIndex(item => item > 1); // 1

/* ---------------------- 9. 数组迭代器方法 ---------------------- */

// 9.1 keys() - 返回数组索引的迭代器
const keysIterator = arr1.keys();
for (let key of keysIterator) {
  console.log(key); // 0, 1, 2, 3, 4, 5
}

// 9.2 values() - 返回数组元素的迭代器
const valuesIterator = arr1.values();
for (let value of valuesIterator) {
  console.log(value); // 1, 2, 0, 0, undefined, undefined
}

// 9.3 entries() - 返回数组索引和元素的迭代器
const entriesIterator = arr1.entries();
for (let [index, value] of entriesIterator) {
  console.log(`索引 ${index} 的值是 ${value}`);
}

/* ---------------------- 10. 数组静态方法 ---------------------- */

// 10.1 Array.isArray() - 判断是否为数组
const isArray = Array.isArray(arr1); // true

// 10.2 Array.from() - 从类数组对象或可迭代对象创建数组
const arrFrom = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']

// 10.3 Array.of() - 根据参数创建数组
const arrOf = Array.of(1, 2, 3); // [1, 2, 3]

/* ---------------------- 11. 数组实例方法 ---------------------- */

// 11.1 toString() - 将数组转换为字符串
const str = arr1.toString(); // "1,2,0,0,,"

// 11.2 toLocaleString() - 将数组转换为本地化字符串
const localeStr = arr1.toLocaleString(); // "1,2,0,0,,"

// 11.3 valueOf() - 返回数组本身
const value = arr1.valueOf(); // [1, 2, 0, 0, undefined, undefined]

// 11.4 Symbol.iterator - 返回数组的默认迭代器
const iterator = arr1[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2

/* ---------------------- 12. 数组扩展方法 ---------------------- */

// 12.1 使用扩展运算符 (...) 展开数组
const arr7 = [1, 2, 3];
const arr8 = [...arr7, 4, 5]; // [1, 2, 3, 4, 5]

// 12.2 使用扩展运算符复制数组
const arr9 = [...arr7]; // [1, 2, 3]

// 12.3 使用扩展运算符合并数组
const mergedArr = [...arr7, ...arr8]; // [1, 2, 3, 1, 2, 3, 4, 5]

// 12.4 使用扩展运算符将字符串转换为数组
const strArr = [...'hello']; // ['h', 'e', 'l', 'l', 'o']

/* ---------------------- 13. 数组与对象转换 ---------------------- */

// 13.1 将数组转换为对象
const objFromArr = Object.fromEntries(arr1.entries()); // { 0: 1, 1: 2, 2: 0, 3: 0, 4: undefined, 5: undefined }
const objFromArr2 = arr1.reduce((acc, value, index) => {
    acc[index] = value;
    return acc;
  }, {}); // { 0: 1, 1: 2, 2: 0, 3: 0, 4: undefined, 5: undefined }
// 13.2 将对象转换为数组
const obj = { a: 1, b: 2, c: 3 };

// 方法 1: 使用 Object.entries() 转换为键值对数组
const arrFromObj1 = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// 方法 2: 使用 Object.keys() 转换为键数组
const arrFromObj2 = Object.keys(obj); // ['a', 'b', 'c']

// 方法 3: 使用 Object.values() 转换为值数组
const arrFromObj3 = Object.values(obj); // [1, 2, 3]

/* ====================== 笔记结束 ====================== */