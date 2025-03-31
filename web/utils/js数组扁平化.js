
//递归
function flattenArray(arr){
    let result = [];
    arr.forEach(element => {
       if(element instanceof Array)
        {
            result = result.concat(flattenArray(element));
        } 
        else
        result.push(element);
    });
    return result
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
//reduce方法

function reduceArray(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? reduceArray(val) : val);
    }, []); // 这里需要提供一个初始值 []
}

console.log(reduceArray([1, [2, [3, 4], 5], 6])); // 输出: [1, 2, 3, 4, 5, 6]



//使用flat()方法
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(nestedArray.flat(Infinity)); // 输出: [1, 2, 3, 4, 5, 6]