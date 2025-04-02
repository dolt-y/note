/**
 * 防抖函数 有一个等待时长，如果在这个等待时长内，再次调用了函数，就取消上一个定时器，并新建一个定时器。
 * 所以 debounce 适用于 input, keyup, keydown 等事件, 亦或者 click 事件需要防止用户在某个时间范围内多次点击的时候，也可以用。
 * @param func 要执行的函数
 * @param wait 延迟时间
 */
const debounce = function (func, wait) {
    const callback = func
    let timeout;
    function debounced(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () { // 如果不考虑兼容问题  可以使用箭头函数优化，不必保存this
            callback.apply(context, args);
        }, wait);
    }
    return debounced;
};

/**
 * 节流函数 有一个时间间隔，在这个时间间隔内，只执行一次函数。
 * 所以 throttle 适用于 scroll, resize 等事件，可以减少函数执行的频率。
 * @param func 要执行的函数
 * @param wait 时间间隔
 */
const throttle = function (func, wait) {
    const callback = func;
    let timeout;
    let firstInvoled = true;// 是否为第一次执行
    function throttled(...args) {
        const context = this;
        if (firstInvoled) {
            callback.apply(context, args);
            firstInvoled = false;
            return;
        }
        if(timeout){ // 如果有定时器，则返回
            return; 
        }
        timeout = setTimeout(function () {
            callback.apply(context, args);
            timeout = null;
        }, wait);
    }
    return throttled;
};