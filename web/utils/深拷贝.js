/* 深拷贝 --JSON序列化  缺陷:function,undefined,symbol类型会丢失,无法处理循环引用  **/
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copied = deepCopy(original);
/**深拷贝--递归 适用大多数场景*/
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