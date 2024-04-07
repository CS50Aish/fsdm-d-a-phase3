// Let us create Singly Linked List and perform CRUD operations

class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

    // Create: Add a new node at the end of the list
    add(data){
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
               current = current.next; 
            }
            current.next = newNode;
        }
    }

    // Read: Traverse and display elements of the list
    read(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    // Update: Modify the value of a node at a given position
    update(position, data){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === position){
                current.data = data;
                return;
            }
            current = current.next;
            count++;
        }
        console.log("Position not found");
    }
    
    // Delete: To remove a node from the list at a specified position
    delete(position){
        if(position === 0){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let count = 0;

        while(current){
            if(count === position){
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
            count++;
        }
        console.log("Position not found.")

    }

}

const list = new SinglyLinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.update(1, 5);
list.delete(2);
list.read();
