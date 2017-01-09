"use strict"

class Queue {
  constructor() {
    this._array = [];
  }
  unshift(x) {
    if(this._array.length > 10){
      this.isFull();
    }
    return this._array.unshift(x);
  }
  shift() {
    return this._array.shift();
  }
  peek() {
    return this._array[0];
  }
  isEmpty() {
    if (this._array.length === 0) {
      return `Empty`;
    }
    else {
      return `Available`;
    }
  }
  isFull() {
      return console.log("Array is Full");
  }
}
let my_queue = new Queue();
console.log(`The queue is empty? ${my_queue.isEmpty()}`);
my_queue.unshift("HACKTIVEIGHT");
my_queue.unshift("HACKTIV8");
my_queue.unshift("HACKTIVATE");
my_queue.unshift(15);

console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(`The queue is empty? ${my_queue.isEmpty()}`);
console.log(my_queue.shift());
