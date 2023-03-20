class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if(!this.head) {
            return undefined;
        } else {
            var current = this.head;
            while(current.next !== this.tail && current.next !== null) {
                current = current.next;
            }
            var secondToLast = current;
            var last = secondToLast.next;
            secondToLast.next = null;
            this.tail = secondToLast;
            this.length--;
            return last;
            if(this.length === 0) {
                this.head = null;
                this.tail = null;
                return undefined;
            }
        }
    }
    
    shift() {
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
    }

    get(i) {
        if(i < 0 || i >= this.length) {
            return null;
        } else {
            var current = this.head;
            var count = 0;
            while(count !== i) {
                current = current.next;
                count++;
            }
            return current;
        }
    }

    set(newVal, i) {
        var nodeAtIndex = this.get(i);
        if(nodeAtIndex == null) {
            return false;
        } else {
            nodeAtIndex.val = newVal;
            return true;
        }
    }

    insert(newVal, i) {
        if(i < 0 || i > this.length) return false;
        else if(i === this.length) return this.push(newVal);
        else if(i == 0) return this.unshift(newVal);
        else {
            let newNode = new Node(newVal);
            let prevNode = this.get(i - 1);
            let nextNode = prevNode.next;
            prevNode.next = newNode;
            newNode.next = nextNode;
            this.length++;
            return true;
        }
    }

    remove(i) {
        if(i < 0 || i > this.length) return undefined;
        else if(i === this.length - 1) return this.pop();
        else if(i === 0) return this.shift();
        else {
            let prevNode = this.get(i - 1);
            let nodeToDelete = this.get(i);
            prevNode.next = nodeToDelete.next;
            this.length--;
            return nodeToDelete.val;
        }
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print(){
        var arr = [];
        var current = this.head
        while(current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }

}