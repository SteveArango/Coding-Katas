// Strings
let message: string = "Hello World";
message
console.log(message);

function greeting(name: string) {
    console.log(`Hello ${name}`)
}
greeting('Steve')

//Numbers

let numberOne: number;
let numberTwo: number;
let userId: number = 2;

function sum(numberOne: number, numberTwo: number) {
    return numberOne + numberTwo
}

function subtract(numberOne: number, numberTwo: number) {
    return numberOne - numberTwo
}

function multiply(numberOne: number, numberTwo: number) {
    return numberOne * numberTwo
}

console.log(multiply(7,7))

// Boolean

let isActiveUser: boolean = true;
console.log(isActiveUser)
