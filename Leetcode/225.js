// const LinkedList, ListNode = require('../linked-list/app.js');

// 225. Implement Stack using Queues

/******* With Array *******/

// var MyStack = function() {
//     this.queue = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//     return this.queue.push(x);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//      return this.queue.pop(this.queue.length);
// };

// /**
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//     return  this.queue[this.queue.length-1]
// };

// /**
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//     if(this.queue.length === 0 ){
//         return true
//     }
//     return false
// };

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


/******* With Linked List *******/
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class MyQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val){
        const newNode = new Node(val);
        
        if(!this.size){
            // size is 0
            this.head = newNode;
            this.tail = newNode;
        }else{
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.size++;
    }

    dequeue(){
      if(!this.size)return null;

      let node = this.head;
      this.head = this.head.next;
      node.next = null;

      this.size--;

      return node.val;
    }

    peek(){
      return this.head.val;
    }

    empty(){
      return this.size === 0;
    }
}


class MyStack{

  constructor(){
    this.queue = new MyQueue();
  }

  push(val){
    let rotate  = this.queue.size;
    this.queue.enqueue(val);

    while(rotate){
      this.queue.enqueue(this.queue.dequeue());
      rotate--;
    }
  }

  pop(){
    return this.queue.dequeue();
  }

  top(){
    return this.queue.peek();
  }



  empty(){
    return this.queue.empty();
  }


}
