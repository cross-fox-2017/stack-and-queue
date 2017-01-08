"use strict"

class Queue {
  constructor() {
    this.inputArr = [];
  }

  push(input) {
    this.inputArr.push(input)
  }

  shift() {
    this.inputArr.shift()
    return this
  }

  peek() {
    return this.inputArr
  }

  isEmpty() {
    if (this.inputArr.length == 0) {
      return 'Yes! The queue is empty'
    }
    else {
      return `${this.inputArr.length} item(s) in queue`
    }
  }
}

let createQueue = new Queue()

console.log(`The queue is empty? ${createQueue.isEmpty()}`);

// push 3 items into queue
createQueue.push('JavaScript')
createQueue.push('is just so')
createQueue.push('cool')

// test
console.log(`The queue is empty? ${createQueue.isEmpty()}`);
console.log(createQueue.peek());

// 1st shift
createQueue.shift();
console.log(`The Queue is empty? ${createQueue.isEmpty()}`);
console.log(createQueue.peek());

// 2nd shift
createQueue.shift();
console.log(`The queue is empty? ${createQueue.isEmpty()}`);
console.log(createQueue.peek());

// 3nd shift
createQueue.shift();
console.log(`The queue is empty? ${createQueue.isEmpty()}`);
console.log(createQueue.peek());
