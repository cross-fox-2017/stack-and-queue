"use strict"

class Queue {
  constructor() {
    this.array = [];
  }

  push(val) {
    this.array.push(val)
  }

  shift() {
    this.array.shift()
    return this
  }

  peek() {
    return this.array
  }

  isEmpty() {
    if (this.array.length == 0) {
      return 'The queue is empty?'
    }
    else {
      return `${this.array.length}`
    }
  }
}

let checkQueue = new Queue()

console.log(`The queue is empty? ${checkQueue.isEmpty()}`);

// Penambahan 3 queue
checkQueue.push('JavaScript')
checkQueue.push('is just so')
checkQueue.push('cool')

// Pengecekkan queue
console.log(`The queue is empty? ${checkQueue.isEmpty()}`);
console.log(checkQueue.peek());

checkQueue.shift();
console.log(`The Queue is empty? ${checkQueue.isEmpty()}`);
console.log(checkQueue.peek());

checkQueue.shift();
console.log(`The queue is empty? ${checkQueue.isEmpty()}`);
console.log(checkQueue.peek());

checkQueue.shift();
console.log(`The queue is empty? ${checkQueue.isEmpty()}`);
console.log(checkQueue.peek());
