/**
 * FIFO
 */
class Queue implements QueueAbstract {
    queue = [];
    constructor(){
        
    }
    enQueue(element){
        this.queue.push(element);
    }
    deQueue(){
        return this.queue.unshift();
    }
    isEmpty(){
        return this.queue.length;
    }
}