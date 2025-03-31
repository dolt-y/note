function findMaxRepeat(arr) {
    let count = {}; // 使用对象来记录每个元素的计数
    arr.forEach(element => {
        if (count[element]) {
            count[element]++;
        } else {
            count[element] = 1; // 初始化计数为1
        }
    });
    
    let maxCount = 0;
    let maxElement = null; // 用于记录最大重复的元素
    for (let key in count) {
        if (count[key] > maxCount) {
            maxCount = count[key];
            maxElement = key; // 更新对应的元素
        }
    }
    
    return { element: maxElement, count: maxCount }; // 返回元素及其计数
}

console.log(findMaxRepeat([1, 1, 1, 3, 4, 5, 6]));
