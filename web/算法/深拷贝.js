// 深拷贝 适合对象中只包含基本数据类型 复制对象，而不是对象的引用
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copied = deepCopy(original);
// 递归实现深拷贝

function deepCopy_recursive(obj) {
    if (typeof obj!== 'object' || obj === null) {
        return obj;
    }
    if(Array.isArray(obj))
    {
        let result=[];
        for(let i=0;i<obj.length;i++){
            result[i]=deepCopy_recursive(obj[i]);
        }
        return result
    }
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepCopy_recursive(obj[key]);
        }
        return result;
    }
}
const original_recursive = [1, { a: 2 }, 3];
console.log(deepCopy_recursive(original_recursive)==original_recursive)