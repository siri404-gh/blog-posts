# Singly Linked list

```js
export const Node = class {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  };
  
  const SinglyLinkedList = class {
    constructor() {
      this.root = null;
    }
  };
  
  SinglyLinkedList.prototype.get = function() {
    return this.root;
  };
  
  SinglyLinkedList.prototype.print = function() {
    let pointer = this.root;
    let ret = [];
  
    while (pointer) {
      ret.push(pointer.val);
      pointer = pointer.next;
    }
    return ret;
  };
  
  SinglyLinkedList.prototype.printReverse = function() {
    let res = [];
  
    const print = node => {
      node.next && print(node.next);
      res.push(node.val);
    };
  
    print(this.root);
    return res;
  };
  
  SinglyLinkedList.prototype.addToHead = function(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return;
    }
    node.next = this.root;
    this.root = node;
    return this.root;
  };
  
  SinglyLinkedList.prototype.addToTail = function(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this.root;
    }
    let pointer = this.root;
    while (pointer.next) pointer = pointer.next;
    pointer.next = new Node(val);
    return this.root;
  };
  
  SinglyLinkedList.prototype.addToPos = function(val, pos) {
    let i = 0;
    let pointer = this.root;
    let prevNode;
    const node = new Node(val);
  
    while (pointer) {
      if (i === pos) {
        if (i === 0) {
          node.next = this.root;
          return node;
        } else {
          prevNode.next = node;
          node.next = pointer;
          return this.root;
        }
      }
      prevNode = pointer;
      pointer = pointer.next;
      i++;
    }
  };
  
  SinglyLinkedList.prototype.delete = function(val) {
    let pointer = this.root;
    let prevPointer;
  
    while (pointer) {
      if (pointer.val === val) {
        if (!prevPointer) this.root = pointer.next;
        else if (!pointer.next) prevPointer.next = null;
        else prevPointer.next = pointer.next;
        return this.root;
      }
      prevPointer = pointer;
      pointer = pointer.next;
    }
    return this.root;
  };
  
  SinglyLinkedList.prototype.deleteFromPos = function(pos) {
    let pointer = this.root;
    let i = 0;
    let prevPointer;
  
    while (pointer) {
      if (i === pos) {
        if (!prevPointer) this.root = pointer.next;
        else if (!pointer.next) pointer = null;
        else prevPointer.next = pointer.next;
        return this.root;
      }
      prevPointer = pointer;
      pointer = pointer.next;
      i++;
    }
  };
  
  SinglyLinkedList.prototype.deleteFromPosReverse = function(pos) {
    if (!this.root) return;
    let i = 0;
  
    const remove = (node, prev = null) => {
      node.next && remove(node.next, node);
      i++;
      if (i !== pos) return;
      if (prev) prev.next = node ? node.next : null;
      else this.root = this.root.next;
    };
  
    remove(this.root);
    return this.root;
  };
  
  SinglyLinkedList.prototype.deleteDuplicateFromSorted = function() {
    if (!this.root) return null;
    let p1 = this.root;
    let p2 = this.root.next;
    if (!p2) return this.root;
  
    while (p2) {
      if (p1.val === p2.val) p1.next = p2.next;
      else p1 = p2;
      p2 = p2.next;
    }
  
    return this.root;
  };
  
  SinglyLinkedList.prototype.reverse = function() {
    if (!this.root) return;
    let tail;
  
    const traverse = (node, prev = null) => {
      node.next && traverse(node.next, node);
      node.next = prev;
      if (!tail) tail = node;
    };
  
    traverse(this.root);
    this.root = tail;
    return this.root;
  };
  
  SinglyLinkedList.prototype.mergeSorted = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
  
    while (p1) {
      const node = new Node(p1.val);
      let prevNode;
      let added = false;
      while (p2) {
        if (p2.val >= p1.val) {
          if (prevNode) {
            prevNode.next = node;
            node.next = p2;
          } else {
            node.next = p2;
            l2 = node;
          }
          break;
        }
        prevNode = p2;
        p2 = p2.next;
      }
      if (!added) {
        if (prevNode) {
          prevNode.next = node;
          node.next = p2;
        } else {
          node.next = p2;
          l2 = node;
        }
      }
      p1 = p1.next;
    }
    return l2;
  };
  
  SinglyLinkedList.prototype.compare = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
  
    while (p1 || p2) {
      const val1 = p1 ? p1.val : null;
      const val2 = p2 ? p2.val : null;
  
      if (val1 !== val2) return false;
  
      if (p1) p1 = p1.next;
      if (p2) p2 = p2.next;
    }
  
    if (p1 || p2) return false;
  
    return true;
  };
  
  SinglyLinkedList.prototype.isCyclic = function(head) {
    if (!head) return true;
  
    let p1 = head;
    let p2 = head;
  
    while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;
      if (p1 === p2) return true;
    }
  
    return false;
  };
  
  export default SinglyLinkedList;
```