class QueueWith2Stacks {
    constructor() {
        this.enqueueStack = [];
        this.dequeueStack = [];
    }

    enqueue(item) {
        this.enqueueStack.push(item);
    }

    dequeue() {
        if (this.dequeueStack.length === 0) {
           
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }

            if (this.dequeueStack.length === 0) {
                throw new Error("Can't dequeue from empty queue!");
            }
            return this.dequeueStack.pop();
        }
        
    }

}