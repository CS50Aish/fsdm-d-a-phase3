class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    read() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head)
    }

    update(position, data) {

    }

    delete(position) {

    }

}

const list = new CircularLinkedList();

list.add(1);
list.add(2);

list.read();