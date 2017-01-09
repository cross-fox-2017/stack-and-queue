"use strict"

class Stack {
  constructor() {
    this.array = [];
  }

  push(val) {
    return this.array.push(val);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array

  }

  isEmpty() {
    if(this.array.length == 0){
      return 'Stack is Empty!'
    } else {
      return `${this.array.length}`
    }
  }
}

let stackArr = new Stack();
console.log(`The stack is empty? ${stackArr.isEmpty()}`);

// Penambahan 3 Array berupa string
stackArr.push('JavaScript')
stackArr.push('is just so')
stackArr.push('cool')

// Pengecekkan Array sampai empty
console.log(`The stack is empty? ${stackArr.isEmpty()}`);
console.log(stackArr.peek());

stackArr.pop();
console.log(`The stack is empty? ${stackArr.isEmpty()}`);
console.log(stackArr.peek());

stackArr.pop();
console.log(`The stack is empty? ${stackArr.isEmpty()}`);
console.log(stackArr.peek());

stackArr.pop();
console.log(`The stack is empty? ${stackArr.isEmpty()}`);
console.log(stackArr.peek());
