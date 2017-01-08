"use strict"

class Stack {
  constructor() {
    this.arr = [];
  }
  push(x) {
    if (this.arr.length===5) {
      return console.log('Can not push, data is full');
    }
    return this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr.shift();
  }
  isEmpty() {
    if(this.arr.length === 0 ){
      return `Y`;
    }
    return`N`;
  }
}

let my_stack = new Stack();

console.log(`The stack is empty? ${my_stack.isEmpty()}`);
my_stack.push("JAVASCRIPT");
my_stack.push("is just so");
my_stack.push("cool");
my_stack.push("Hacktiv8");
my_stack.push("Learn");
my_stack.push("code");
my_stack.push("PHP");
my_stack.push("MySql");

my_stack.push(15);

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(my_stack.peek());

console.log(`The stack is empty? ${my_stack.isEmpty()}`);
