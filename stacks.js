class Node{
    constructor(value){
        this.value = value;
        this.next  = null ; 
    }
};
//// Stack with linked list Structure\\\\
// class Stack {
//     constructor(){
//         this.length = 0;
//         this.top = null;
//         this.bottom = null;
//     };
//     push(value){
//         const newNode = new Node(value);
//         if(this.length === 0){
//             this.top = newNode;
//             this.bottom = newNode;
//         }else{
//             let preTop = this.top;
//             this.top = newNode;
//             this.top.next = preTop
//         }
//         this.length++;
//         return this
//     };
//     pop(){
//         if(this.length === 0) return null;
//         if(this.bottom === this.top) this.bottom = null;
//         const deletedNode = this.top;
//         this.top = deletedNode.next
//         this.length--;
//         return deletedNode;
        
//     };
//     peak(){return this.top};
//     isEmpty(){
//         if(this.length === 0 ) return true;
//         return false;
//     }
// }
class Stack{
    constructor(){
        this.data = [];
    }
    push(value){
        this.data.push(value);
        return this.data;
    };
    pop(){
        // const deletedElem = this.data[this.data.length-1];
        return this.data.pop();
    }
    peak(){
        return this.data[this.data]
    }

}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// stack.push(4);
// stack.pop();
// stack.pop();
stack.pop();

// console.log(stack.isEmpty())
console.log(stack)
console.log(stack.top);