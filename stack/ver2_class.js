
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class MyStack{
  constructor(){
    this.top = 0;
    this.size = 0;
  }

  push(val){
    const newNode = new Node(val);

    // check if stack (heap) is full. Then inserting an
    //  element would lead to stack overflow
    if (temp == null) {
            document.write("<br>Heap Overflow");
            return;
    }
        
    if(!this.size){
        // size is 0
        this.top = newNode;
    }else{
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
  }

  empty(){
    return this.top == null;
  }

  peek(){
      // check for empty stack
      if (!this.empty()) {
          return this.top.val;
      }
      else {
          console.log('Stack is empty');
          return -1;
      }
  }

  pop(){
        // check for stack underflow
        if (this.top == null) {
          console.log('Stack Underflow');
            
            return;
        }
  
        // update the top pointer to point to the next node
        this.top = this.top.next;
    }

}