/*关于javascript this 的用法*/

// 四种绑定方式
// 1. 默认绑定
function foo() {
  console.log(this)
}
foo() // node环境是global对象，浏览器环境是window对象
//通过闭包调用
var obj2 = {
  bar: function () {
    return function () {
      console.log(this)
    }
  }
}
obj2.bar()() // 同上

// 2. 隐式绑定
var name = "window"
var obj = {
  name: "obj",
  foo: function () {
    console.log(this.name)
  }
}
obj.foo() // "obj"

// 3. 显式绑定
function foo() {
  console.log(this)
}
var obj = {
  name: 'obj1',
}

foo.call(obj)
foo.apply(obj)
foo.call("xxx")

// 4. new绑定
function Person(name) {
  this.name = name
}
var p = new Person('p1')
console.log(p.name) // "p1"

// 5. 优先级
// 1. new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
