/*? Stack 栈 */
class Stack {
    constructor(){
      this.stack = [];
    }
    pop(){
      return this.stack.pop();
    }
    push(item){
      this.stack.push(item);
    }
    peek(){
      return this.stack[this.stack.length - 1];
    }
    isEmpty(){
      return this.stack.length === 0;
    }
    get size(){
      return this.stack.length;
    }
  }
  