/* ====================== JavaScript 对象方法全面笔记 ====================== */

/* ---------------------- 1. 对象创建 ---------------------- */

// 1.1 使用字面量创建对象（推荐）
const obj1 = { name: 'Alice', age: 25 }; // 创建一个包含 name 和 age 的对象

// 1.2 使用构造函数创建对象
const obj2 = new Object(); // 创建一个空对象
obj2.name = 'Bob';
obj2.age = 30;

// 1.3 使用 Object.create() 创建对象
const protoObj = { greet() { console.log('Hello!'); } };
const obj3 = Object.create(protoObj); // 创建一个继承 protoObj 的对象
obj3.name = 'Charlie';

// 1.4 使用 Object.assign() 合并对象
const obj4 = Object.assign({}, obj1, { age: 26 }); // 合并 obj1 并覆盖 age

/* ---------------------- 2. 对象属性操作 ---------------------- */

// 2.1 添加属性
obj1.gender = 'female'; // 直接添加属性

// 2.2 删除属性
delete obj1.gender; // 删除 gender 属性

// 2.3 修改属性
obj1.age = 26; // 修改 age 属性

// 2.4 检查属性是否存在
const hasName = 'name' in obj1; // true
const hasGender = obj1.hasOwnProperty('gender'); // false

// 2.5 获取属性值
const name = obj1.name; // 'Alice'
const age = obj1['age']; // 26

// 2.6 定义属性描述符
Object.defineProperty(obj1, 'job', {
  value: 'Engineer',
  writable: true, // 是否可修改
  enumerable: true, // 是否可枚举
  configurable: true // 是否可删除或修改描述符
});

// 2.7 获取属性描述符
const desc = Object.getOwnPropertyDescriptor(obj1, 'name'); // { value: 'Alice', writable: true, enumerable: true, configurable: true }

// 2.8 冻结对象
Object.freeze(obj1); // 对象不可修改、添加或删除属性

// 2.9 密封对象
Object.seal(obj1); // 对象不可添加或删除属性，但可修改现有属性

// 2.10 防止扩展
Object.preventExtensions(obj1); // 对象不可添加新属性

/* ---------------------- 3. 对象遍历 ---------------------- */

// 3.1 使用 for...in 遍历属性
for (let key in obj1) {
  console.log(key, obj1[key]); // 遍历所有可枚举属性（包括继承的）
}

// 3.2 使用 Object.keys() 遍历属性
const keys = Object.keys(obj1); // ['name', 'age']
keys.forEach(key => console.log(key, obj1[key]));

// 3.3 使用 Object.values() 遍历值
const values = Object.values(obj1); // ['Alice', 26]
values.forEach(value => console.log(value));

// 3.4 使用 Object.entries() 遍历键值对
const entries = Object.entries(obj1); // [['name', 'Alice'], ['age', 26]]
entries.forEach(([key, value]) => console.log(key, value));

// 3.5 使用 Object.getOwnPropertyNames() 遍历所有属性（包括不可枚举的）
const allKeys = Object.getOwnPropertyNames(obj1); // ['name', 'age']

// 3.6 使用 Object.getOwnPropertySymbols() 遍历 Symbol 属性
const symbolKey = Symbol('id');
obj1[symbolKey] = 123;
const symbols = Object.getOwnPropertySymbols(obj1); // [Symbol(id)]

/* ---------------------- 4. 对象转换 ---------------------- */

// 4.1 将对象转换为数组
const arrFromObj1 = Object.entries(obj1); // [['name', 'Alice'], ['age', 26]]
const arrFromObj2 = Object.keys(obj1); // ['name', 'age']
const arrFromObj3 = Object.values(obj1); // ['Alice', 26]

// 4.2 将对象转换为 JSON 字符串
const jsonStr = JSON.stringify(obj1); // '{"name":"Alice","age":26}'

// 4.3 将 JSON 字符串转换为对象
const objFromJson = JSON.parse(jsonStr); // { name: 'Alice', age: 26 }

// 4.4 将对象转换为 Map
const mapFromObj = new Map(Object.entries(obj1)); // Map { 'name' => 'Alice', 'age' => 26 }

// 4.5 将 Map 转换为对象
const objFromMap = Object.fromEntries(mapFromObj); // { name: 'Alice', age: 26 }

// 4.6 将对象转换为查询字符串
const queryString = new URLSearchParams(obj1).toString(); // 'name=Alice&age=26'

// 4.7 将查询字符串转换为对象
const params = new URLSearchParams('name=Alice&age=26');
const objFromQuery = Object.fromEntries(params.entries()); // { name: 'Alice', age: '26' }

/* ---------------------- 5. 对象原型操作 ---------------------- */

// 5.1 获取对象的原型
const proto = Object.getPrototypeOf(obj1); // {}

// 5.2 设置对象的原型
Object.setPrototypeOf(obj1, { greet() { console.log('Hello!'); } });

// 5.3 检查对象是否是某个原型的实例
const isProto = obj1 instanceof Object; // true

// 5.4 检查对象是否在原型链上
const isInChain = protoObj.isPrototypeOf(obj3); // true

/* ---------------------- 6. 对象方法 ---------------------- */

// 6.1 toString() - 返回对象的字符串表示
const str = obj1.toString(); // '[object Object]'

// 6.2 valueOf() - 返回对象的原始值
const value = obj1.valueOf(); // { name: 'Alice', age: 26 }

// 6.3 hasOwnProperty() - 检查对象是否拥有某个属性
const hasOwn = obj1.hasOwnProperty('name'); // true

// 6.4 isPrototypeOf() - 检查对象是否在另一个对象的原型链上
const isProtoOf = protoObj.isPrototypeOf(obj3); // true

// 6.5 propertyIsEnumerable() - 检查属性是否可枚举
const isEnumerable = obj1.propertyIsEnumerable('name'); // true

/* ====================== 笔记结束 ====================== */