"use strict"

class Queue {
  constructor(arrTemp) {
    this.arrTemp = []
  }

  push (x){
    return this.arrTemp.push(x);
  }

  pop(){
    return this.arrTemp.shift();
  }

  peek(){
    return this.arrTemp;
  }

  isEmpty(){
    if(this.arrTemp.length === 0){
      return 'Sudah penuh'
    }else {
      return this.peek();
    }
  }
}

let resultQueue = new Queue ();
    resultQueue.isEmpty();

    resultQueue.push("Javascripts");
    resultQueue.push("Reack.js");
    resultQueue.push("Html & Css");

    resultQueue.pop()
    console.log(resultQueue.peek())
