/** js 数据类型 */

// 1. 基本数据类型 (Number, String, Boolean, Null, Undefined, Symbol, BigInt, Object)

// 2.判断基本数据类型 (typeof xx)

// 3.判断引用数据类型 ( xx instanceof 已知对象类型)

/** 万能判断 */
//适用于所有类型的判断检测,注意区分大小写. toString方法,在Object原型上返回数据格式,返回值是一个字符串,其中包含了该对象的类型信息.
 Object.prototype.toString.call('hello')
 // "[object String]"
 Object.prototype.toString.call(123)
 // "[object Number]"
 function checkToString(obj) {
  // 判断该对象的 toString 是否和 Object.prototype.toString 相同
  return obj && obj.toString === Object.prototype.toString;
}

// 各种类型
const types = {
  object: {},
  array: [],
  func: function(){},
  date: new Date(),
  regexp: /abc/,
  error: new Error('err'),
  number: 123,
  string: 'abc',
  boolean: true,
  math: Math,
  json: JSON,
  map: new Map(),
  set: new Set(),
  symbol: Symbol('s'),
  bigint: BigInt(10),
  custom: new (function MyObj(){})()
};

for (const key in types) {
  const obj = types[key];
  // 判断是否覆盖了 toString
  const isInherited = checkToString(obj);
  // 用 Object.prototype.toString.call 判断类型
  const typeString = Object.prototype.toString.call(obj);
  console.log(
    `${key.padEnd(8)} | 继承Object.prototype.toString: ${isInherited} | 类型: ${typeString}`
  );
}
let obj = {
  name: 'obj',
  age: 18
}
console.log(obj.toString()) // [object Object]