/*
push(element)
pop()
isEmpty()
getTop()
size()
FILO
*/
class Stack {
    size;
    stack;
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }

    getTop(){
        return this.stack[this.stack.length-1];
    }

    push(element){
        this.stack.push(element);
        this.size++;
    }

    pop(){
        this.size--;
        return this.stack.pop();
    }
}
var myStack = new Stack();

for (var i = 0; i < 5; i++) {
    myStack.push(i);
}

console.log('myStack', myStack)
console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (var i = 0; i < 5; i++) {
    console.log("Element popped: " + myStack.pop());
    console.log("top: " + myStack.getTop());
}

console.log("Is stack empty?: " + myStack.isEmpty());
console.log("top: " + myStack.getTop());