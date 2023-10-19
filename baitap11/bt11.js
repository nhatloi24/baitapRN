// bai 1

// const calculate = (operation) => {
//     const operations = {
//     add : (a, b) => a + b,
//     subtract : (a, b) => a - b,
//     multiply : (a, b) => a * b,
//     divide : (a, b) => a / b
//     }
//     return function(a) {
//         return function(b) {
//             return operations[operation](a, b)
//     }
//     }
// };


// console.log((calculate('add')(5)(3)));

//bai 2

// function* randomSequence(n){
//     for (let i =0; i < n; i++){
//         yield Math.floor(Math.random() * 101);
//     }
//     let generator = randomSequence();
//     for (const number of generator){
//         console.log(number.next());
//     }
// }

// bai 3
class Stack {
    constructor(){
        this.elements = [];

    }
    push(element){
        this.elements.push(element);
    }
    pop(){
        return this.elements.pop();
    }
    peek(){
        return this.elements.shift();
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    size(){
        return this.elements.length
    }
}
const stack = new Stack();
stack.push(10)
stack.push(50)
stack.push(20)
stack.push(40)

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

// bai 4

// class Queue {
//     constructor(){
//         this.elements = [];
//     }

//     equeue(element){
//         this.elements.push(element);
//     }

//     dequeue(){
//         return this.elements.shift();
//     }
//     peek(){
//         return this.elements[0];
//     }
//     isEmpty(){
//        return this.elements.length === 0;
//     }

//     size(){
//        return this.elements.length;
//     }
// }

// const queue = new Queue();

// queue.equeue(1);
// queue.equeue(2);
// queue.equeue(3);

// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// console.log(queue.size());
