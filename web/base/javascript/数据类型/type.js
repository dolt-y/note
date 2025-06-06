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
 