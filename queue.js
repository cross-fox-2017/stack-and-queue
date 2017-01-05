"use strict"

class Queue {

  constructor() {
    this.arr = [];
  }

  push(x){
    return this.arr.push(x);
  }

  pop(){

    return this.arr.shift();
  }

  peek(){
    return this.arr;
  }

  isEmpty() {

    if(this.arr.length === 0){

      return "|IS EMPTY|";
    }
    else {
      return this.peek();
    }
  }
}

let my_queue = new Queue();

console.log(my_queue.isEmpty());

my_queue.push("HACKTIV8");
my_queue.push("HACKTIV9");
my_queue.push("HACKTIV10");

console.log(my_queue.isEmpty());

my_queue.pop();

console.log(my_queue.peek());
