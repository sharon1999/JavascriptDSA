class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head
        this.length=1
    }
}


const myLinkedList = new LinkedList(5);

console.log(myLinkedList)