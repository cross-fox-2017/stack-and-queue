"use strict"

class Queue {
  constructor() {
    this.nilai = [];
  }

  push(x) {
    this.nilai.push(x);
  }

  shift() {
    this.nilai.shift();
  }

  peek() {

    return this.nilai;
  }

  isEmpty() {
    //console.log(this.nilai);
    if(this.nilai.length === 0 ){
      return `empty`;
    }else{
      return`nope`;
    }

  }
}
let my_stack = new Queue();
my_stack.push("JAVASCRIPT");
my_stack.push("is just so");
my_stack.push("cool");

my_stack.push(15);


console.log(my_stack.shift());
console.log(my_stack.shift());
console.log(my_stack.shift());
//console.log(my_stack.pop());

console.log(my_stack.peek());

console.log(`The stack is empty? ${my_stack.isEmpty()}`);
