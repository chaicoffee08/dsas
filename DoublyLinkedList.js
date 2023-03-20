class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) this.head = this.tail = null;
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) this.head = this.tail = newNode;
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(i, newValue) {
        var nodeAtIndex = this.get(i);
        if(nodeAtIndex != null) {
            nodeAtIndex.val = newValue;
            return true;
        }
        return false;
    } 

    insert(i, val) {
        if(i < 0 || i > this.length) return false;
        if(i === 0) return this.unshift(val);
        if(i === this.length) return this.push(val);
        else {
            let newNode = new Node(val);
            let prevNode = get(i - 1);
            let nextNode = get(i);
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            this.length++;
            return true;
        }  
    }

    remove(i) {
        if(i < 0 || i >= this.length) return undefined;
        if(i === 0) return this.shift();
        if(i === this.length-1) return this.pop();
        else {
            let nodeToDelete = this.get(i);
            let prevNode = nodeToDelete.prev;
            let nextNode = nodeToDelete.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            nodeToDelete.next = null;
            nodeToDelete.prev = null;
            this.length--;
            return nodeToDelete;
        }
    }
}