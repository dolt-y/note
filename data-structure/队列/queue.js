class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { // 入队
        this.items.push(item);
    }
    dequeue() {// 出队
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }
    head() {// 队首
        return this.items[0];
    }
    tail() {// 队尾
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
}