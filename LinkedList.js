// Let us create singly linked list and perform CRUD operations

class ListNode{
    constructor(data)
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    add(data){
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                console.log(current.data);
                current = current.next;
            }
            current.next = newNode;
        }
    }
}