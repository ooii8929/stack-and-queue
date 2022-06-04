/*-----------
Array Version
-----------*/

// class MyStack {
//     constructor() {
//         this.stack = [];
//     }
    
//     push(x) {
//         this.stack.push(x);
//     }
    
//     pop(){
//         if(this.stack.length > 0) return this.stack.pop();
//         return undefined;
//     }
    
//     top() {
//         if(this.stack.length > 0) return this.stack[this.stack.length - 1];
//         return undefined;
//     }
    
//     empty() {
//         return this.stack.length < 1;
//     }
// }


/*-----------
Linked List Version
-----------*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyStack{
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(val){
    const newNode = new Node(val);
    let current;

    if(!this.size){
      // size is 0
      this.top = newNode;
    }else{
      current = this.top;
    newNode.next = current;
    this.top = newNode;
    }

    this.size++;
  }

  pop(){
    if(!this.size)return null;
  

    let node = this.top;
    this.top = this.top.next;
    node.next = null;

    this.size--;
    
    return node.val;
  }

  peek(){
    return this.top;
  }
  
  empty(){
    if( this.arr.length === 0 ){
      return true;
    }
    return false;
  }
}


/*-----------
Queue Version
-----------*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class MyQueue{
  constructor(){
    let stack = new MyStack();
    this.head = null;
  }



  push(val){
    stack.push(val);
    let newNode = Node(stack.peek());
    let current;

    if(!this.size){
      // size is 0
      this.top = newNode;
    }else{
      current = this.top;
    newNode.next = current;
    this.top = newNode;
    }

    this.size++;
  }

}




stack.push('2');
stack.push('4');
stack.push('6');

let a = [2,3,3]
a.push(2)



console.log(stack.pop());
console.log(stack.pop());