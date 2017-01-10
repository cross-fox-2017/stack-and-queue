"use strict"

class Stack {
  constructor(arrTemp) {
    this.arrTemp = [];
  }

  push(x) {
    return this.arrTemp.push(x)
  }

  pop() {
    return this.arrTemp.pop();
  }

  peek() {
    return this.arrTemp.pop();
  }

  isEmpty() {
    if(this.arrTemp.length === 0){
      return "Sudah Kosong"
    }else{
      return this.peek();
    }
  }
}

let resultStack = new Stack();

    resultStack.push("Javascripts");
    resultStack.push("React.js");
    resultStack.push("Html & CSS");

    console.log(resultStack.isEmpty())
    console.log(resultStack.pop());
    console.log(resultStack.peek());
