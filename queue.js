"use strict"
class Queue {
  constructor() {
    this.arr = [];
  }
  push(data) {
    if(this.arr.length > 6){
      this.isFull();
    }
    return this.arr.unshift(data);
  }
  pop() {
    return this.arr.shift();
  }
  peek() {
    return this.arr[0];
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
let my_queue = new Queue();
console.log(`The queue is empty? ${my_queue.isEmpty()}`);
my_queue.push("I am a");
my_queue.push("full stack");
my_queue.push("javascript");
my_queue.push("developer");
my_queue.push(15);

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(`The queue is empty? ${my_queue.isEmpty()}`);
console.log(my_queue.pop());
