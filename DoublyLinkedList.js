class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const newNode = new ListNode(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    readForward(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

    readBackward(){
        let current = this.tail;
        while(current){
            console.log(current.data);
            current = current.prev;
        }
    }

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

    delete(position){
        if(position === 0) {
            this.head = this.head.next;
            if(this.head){
                this.head.prev = null;
            }
            else{
                this.tail = null;
            }
            return;
        }

        let current = this.head;
        let count = 0;

        while(current){
            if(count === position){
                if(current.next){
                    current.next.prev = current.prev;
                }
                else{
                    this.tail = current.prev;
                }
                if(current.prev){
                    current.prev.next = current.next;
                }
                else{
                    this.head = current.next;
                }
                return;
            }
            current = current.next;
            count++;
        }
        console.log("Position not found");
    }

}

const list = new DoublyLinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.update(1, 6);
list.delete(3);
console.log("Forward traversal:")
list.readForward();
console.log("Backward traversal:")
list.readBackward();