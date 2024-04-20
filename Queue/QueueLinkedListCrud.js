class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        }
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty.";
        }

        const removedData = this.front.data;
        this.front = this.front.next;
        this.size--;

        if(this.isEmpty()){
            this.rear = null;
        }
        return removedData;
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty.";
        }
        return this.front.data;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Queue: ", queue);

console.log("Dequeued Data: ", queue.dequeue());

console.log("Queue: ", queue);

console.log("Peeked Data: ", queue.peek());

console.log("Queue: ", queue);

console.log("Is the queue empty? ", queue.isEmpty());

console.log("Queue Size: ", queue.getSize());