class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    getFirst() {
      return this.head;
    }

    getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
      return lastNode
    }

    clear() {
      this.head = null;
    }

    size() {
      let count = 0; 
      let node = this.head;
      while (node) {
          count++;
          node = node.next
      }
      return count;
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let list = new LinkedList(node1)

module.export =  LinkedList, ListNode;

// console.log(list.getLast()) //returns 5