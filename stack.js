"use strict"

class Stack {
  constructor() {
    this.arr = [];
  }
  push(x) {
    if (this.arr.length===10)
      return this.isFull();
    return this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length-1];
  }
  isEmpty() {
    if(this.arr.length === 0 )
      return `Y`;
    return`N`;
  }
  isFull() {
    return console.log('Can not push, data is full');
  }
  print() {
    return this.arr;
  }
}

let my_stack = new Stack();

console.log(`The stack is empty? ${my_stack.isEmpty()}`);
my_stack.push("JAVASCRIPT"); //peek
my_stack.push("is just so");
my_stack.push("cool");
my_stack.push("Hacktiv8");
my_stack.push("Learn");
my_stack.push("code");
my_stack.push("PHP");
my_stack.push("MySql"); //pop
my_stack.push("C++"); //pop
my_stack.push("Ruby"); //pop

my_stack.push(15); //can't push

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(my_stack.peek());//posisi atas
console.log(my_stack.print());
console.log(`The stack is empty? ${my_stack.isEmpty()}`);
