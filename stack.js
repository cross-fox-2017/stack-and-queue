"use strict"

class Stack {
  constructor() {
    this.inputArr = [];
  }

  push(input) {
    this.inputArr.push(input)
  }

  pop() {
    this.inputArr.pop()
    return this
  }

  peek() {
    return this.inputArr
  }

  isEmpty() {
    if (this.inputArr.length == 0) {
      return 'Yes! The stack is empty'
    }
    else {
      return `${this.inputArr.length} item(s) in stack`
    }
  }
}

let createStack = new Stack()

console.log(`The stack is empty? ${createStack.isEmpty()}`);

// push 3 items into stack
createStack.push('JavaScript')
createStack.push('is just so')
createStack.push('cool')

// test
console.log(`The stack is empty? ${createStack.isEmpty()}`);
console.log(createStack.peek());

// 1st pop
createStack.pop();
console.log(`The stack is empty? ${createStack.isEmpty()}`);
console.log(createStack.peek());

// 2nd pop
createStack.pop();
console.log(`The stack is empty? ${createStack.isEmpty()}`);
console.log(createStack.peek());

// 3nd pop
createStack.pop();
console.log(`The stack is empty? ${createStack.isEmpty()}`);
console.log(createStack.peek());
