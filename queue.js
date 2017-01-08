"use strict"

class Queue {
  constructor() {
    this.arr = [];
  }
  push(x) {
    if (this.arr.length===10)
      return this.isFull();
    return this.arr.unshift(x);
  }
  pop() {
    return this.arr.shift();
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

let my_queue = new Queue();

console.log(`The stack is empty? ${my_queue.isEmpty()}`);
my_queue.push("JAVASCRIPT"); //peek
my_queue.push("is just so");
my_queue.push("cool");
my_queue.push("Hacktiv8");
my_queue.push("Learn");
my_queue.push("code");
my_queue.push("PHP");
my_queue.push("MySql"); //pop
my_queue.push("C++"); //pop
my_queue.push("Ruby"); //pop

my_queue.push(15); //can't push

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());

console.log(my_queue.peek());
console.log(my_queue.print());
console.log(`The stack is empty? ${my_queue.isEmpty()}`);
