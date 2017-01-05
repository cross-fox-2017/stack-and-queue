"use strict"
class Stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    if(this.arr.length > 6){
      this.isFull();
    }
    return this.arr.push(data);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[arr.length - 1];
  }
  isEmpty() {
    if (this.arr.length === 0) {
      return `Yes`;
    }
    else {
      return `No`;
    }
  }
  isFull() {
      return console.log("Array is Full");
  }
}
let my_stack = new Stack();
console.log(`The stack is empty? ${my_stack.isEmpty()}`);
my_stack.push("Javascript");
my_stack.push("is just so");
my_stack.push("cool");
my_stack.push("guys");
my_stack.push(15);
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(`The stack is empty? ${my_stack.isEmpty()}`);
console.log(my_stack.pop());
