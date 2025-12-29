// main.js
const worker = new Worker('worker.js');

// 发送消息给 worker
worker.postMessage('Hello Worker!');

// 接收 worker 的消息
worker.onmessage = function(e) {
    console.log('收到 worker 消息:', e.data);
};

// 错误处理
worker.onerror = function(error) {
    console.error('Worker 错误:', error);
};

// worker.js
self.onmessage = function(e) {
    console.log('收到主线程消息:', e.data);
    // 处理完成后发送消息回主线程
    self.postMessage('处理完成!');
};