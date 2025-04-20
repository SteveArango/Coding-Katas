// Strings
let message: string = "Hello World";
console.log(message);

function greeting(name: string) {
    console.log(`Hello ${name}`)
}
greeting('Steve')

//Numbers
let userId: number = 2;

function subtract(numberOne: number, numberTwo: number) {
    return numberOne - numberTwo
}

function multiply(numberOne: number, numberTwo: number) {
    return numberOne * numberTwo
}

const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(multiply(7,7))
const addition = sum(7, 7);
console.log(addition)

// Boolean
let isActiveUser: boolean = true;
console.log(isActiveUser)

// Basic Types
let user: string = 'Steve';
let meaningOfLife: number = 777;
let isLoading: boolean = false;
let album: string = 'UUID777';

//Union Types
let postId: string | number = 888;
let isActive: number | boolean | string;
console.log(postId)

// Regex Type
let regex: RegExp = /[a-zA-Z0-9]+/;
console.log(regex.test("!")); // false