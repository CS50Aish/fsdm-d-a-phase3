class Queue{
    constructor(){
        this.items = [];
    }

    // enqueue - add items to the queue
    enqueue(item){
        this.items.push(item);
    }

    // dequeue - remove the items from the queue
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // peek - gets the front item without removing it
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }

    display(){
        console.log("Queue: ", this.items);
    }

}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

queue.display();

console.log("Dequeued item: ", queue.dequeue());

queue.display();

console.log("Peeked item: ", queue.peek());

queue.display();

console.log("Is queue empty? ", queue.isEmpty());

console.log("Queue Size: ", queue.size());


