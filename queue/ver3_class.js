// https://arsenekuo.com/post/2021/12/11/implementation-of-queue-in-javascript

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
    }

    peek(){
      return this.head.val;
    }

    empty(){
      return this.size === 0;
    }
}




