"use strict"

class Queue {
  constructor() {
    this.arr = [];
  }

  push(x) {
    return this.arr.push(x);
  }

  shift() {
    return this.arr.shift()
  }

  peek() {
    return this.arr

  }

  isEmpty() {
    if (this.arr.length == 0) {
      return 'Yes it\'s Empty';
    } else {
        return this.peek()
    }
  }
}

let my_queue = new Queue()

console.log(`The stack is empty? ${my_queue.isEmpty()}`)

my_queue.push(15);
my_queue.push('hacktiv8');
my_queue.push('crossfox');
my_queue.push('JavaScript')
my_queue.push('FullStack Developer')

console.log(my_queue.isEmpty());

my_queue.shift();

console.log(my_queue.peek());
