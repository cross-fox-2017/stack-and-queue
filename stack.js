"use strict"

class Stack {
  constructor() {
    this._array = [];
  }

  push(x) {
    return this._array.push(x)

  }

  pop() {
    return this._array.pop();
  }

  peek() {
    return this._array.slice(-1)[0];
  }

  isEmpty() {
    if(this._array.length == 0){
      return "stack is empty"
    }
    else if(this._array.length == 15){
      return "stack is full"
    } else{
      return "stack terisi"
    }
  }
}

let my_stack = new Stack();

console.log(my_stack.isEmpty());

my_stack.push("HACKTIVATE");
my_stack.push("HACKTIV8");
my_stack.push("HACKTIVEIGHT");

console.log(my_stack.isEmpty());

my_stack.pop();

console.log(my_stack.peek());
