
// 单例模式（Singleton Pattern）：创建型模式，提供了一种创建对象的最佳方式，
// 这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建


// 懒汉式
const Singleton_lazy = (function() {
    // 定义单例类
    function Singleton(name) {
        this.name = name;
    }

    // 定义获取名称的方法
    Singleton.prototype.getName = function() {
        console.log(this.name);
    };

    let instance;

    // 返回一个对象，包含获取单例实例的方法
    return {
        getInstance: function(name) {
            if (!instance) {//延迟创建
                instance = new Singleton(name);
            }
            return instance;
        }
    };
})();
let a = Singleton_lazy.getInstance("a");
a.getName(); // 输出: a

let b = Singleton_lazy.getInstance("b");
b.getName(); // 输出: a

console.log(a === b); // 输出: true
/*---------------------------------------------------------------*/
//饿汉式
const Singleton_Eager = (function() {
    // 定义单例类
    function Singleton(name) {
        this.name = name;
    }

    // 定义获取名称的方法
    Singleton.prototype.getName = function() {
        console.log(this.name);
    };

    // 在模块加载时立即创建实例
    const instance = new Singleton("Eager Singleton");

    // 返回一个对象，包含获取单例实例的方法
    return {
        getInstance: function() {
            return instance;
        }
    };
})();

let c = Singleton_Eager.getInstance();
c.getName(); // 输出: Eager Singleton

let d = Singleton_Eager.getInstance();
d.getName(); // 输出: Eager Singleton

console.log(c === d); // 输出: true