// ?? 关于对象 数组的迭代器说明
/*  
   1. 迭代器（Iterator）
   定义
   迭代器是一个对象，它提供了一种统一的方式来遍历数据结构（如数组、Map、Set 等）。迭代器对象必须实现 next() 方法，该方法返回一个包含 value 和 done 属性的对象：
   value：当前遍历的值。
   done：布尔值，表示遍历是否结束。
*/
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator](); // 获取数组的默认迭代器

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// 自定义迭代器
const myObject = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

for (let value of myObject) {
    console.log(value); // 10, 20, 30
}

// 1. 为什么对象不能直接调用 keys()、values() 和 entries()？
/*
 对象不是可迭代对象：默认情况下，对象没有实现 Symbol.iterator 方法，因此不能直接使用 for...of 遍历，也不能直接调用 keys()、values() 和 entries()。
 历史原因：在 JavaScript 的早期版本中，对象的设计并没有考虑到迭代的需求。后来为了兼容性，这些方法被设计为静态方法，而不是实例方法。
 避免污染对象原型：如果将这些方法直接添加到对象的原型上，可能会影响所有对象的行为，甚至与现有的属性或方法冲突。
*/


// 2. 为什么数组可以直接调用 keys()、values() 和 entries()？
/*
原因
数组是可迭代对象：数组实现了 Symbol.iterator 方法，因此可以直接使用 for...of 遍历。
数组原型上有这些方法：keys()、values() 和 entries() 是数组原型（Array.prototype）上的方法，因此可以直接调用。
*/

// 优雅解决对象调用 keys()、values() 和 entries() 的问题
Object.prototype.myKeys = function () {
    return Object.keys(this);
};
const obj = { a: 1, b: 2, c: 3 };
console.log(obj.myKeys()); // ['a', 'b', 'c']