var elements = [];
var top = -1;
const MAX = 10;

function push(num) {
    if(top < MAX) {
        top = top + 1;
        elements[top] = num;
        console.log(num + " foi empilhado.");
    }
    else {
        console.log("Pilha está cheia!");
    }
}

function pop(){
    if(top != -1) {
        let num = elements[top];
        top = top - 1;
        // console.log(num + " foi desempilhado.")
        return num;
    }
    else {
        console.log("Pilha está vazia!");
    }
}

function isEmpty() {
    return top == -1 ? 1 : 0; 
}

//------------STACKS------------//

// push(10);
// push(45);
// push(34);

// pop();
// pop();
// pop();
// pop();

var decimal = 10;
var resto;

while(decimal != 0) {
    resto = parseInt(decimal % 2);
    push(resto);
    decimal = parseInt(decimal / 2);

}

console.log("The binary of ? is:");
while(!isEmpty()) {
    console.log(pop());
}