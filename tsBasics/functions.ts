// Function to add 2 to any number

function addTwo(num: number): number {
    return num + 2;
}
addTwo(7);

//String function to convert any string to upper

function convertUpper(str: string){
    return str.toUpperCase();
}
//console.log(convertUpper("a string"));

// function signUpUser(name: string, email: string, isPaid: boolean) {
//     console.log(`User name: ${name}`),
//     console.log(`User email: ${email}`),
//     console.log(`User paid: ${isPaid}`)

//     return `User ${name} has been successfully signed up`
// }

// let signUpMessage = signUpUser("Steve", "steve@test.com", true)
// console.log(signUpMessage)

//Arrow functions

let loginUser = (name: string = 'Guest', email: string) => {
    return `User ${name} has logged in with email ${email}`;
}

// console.log(loginUser('Steve', 'test'))
// console.log(loginUser(undefined, 'test@test.com'))

    function getValue(myVal: number): number | string {
    if (myVal === 0) {
        return 'Steve is a warrior'
    }
    return myVal
}

const value = getValue(7)
// console.log(`This is my value: ${value}`)

const arrowFunction = (number: number): number => {return number}

const triple = arrowFunction(777)

// console.log(triple)

const heroes = ['Don Juan', 'Genaro', 'Pablo', 'Nawal', 'Dante']

const heroeMessage = heroes.map((hero: string) => hero + ' is awesome');

// console.log(heroeMessage)

//.map() Method Examples

const numbers = [3, 6, 9]
const numbersMultiplied = numbers.map((numbers: number) => numbers * 3);
// console.log(numbersMultiplied)

const list = [2,4,6,8,10]
const addTwoToList = list.map((list: number) => {list + 2});
// console.log(addTwoToList)

// .filter(method)

const str = 'Hello';

const chars = str.split("")

const filtering = chars.filter((char) => 'AEIOUaeiou'.includes(char));

// console.log(chars);
// console.log(filtering);

//Understanding .filter() .includes() y .test()

const inputMessage = 'Steve is a real Software Quality Assurance Automation Engineer'

const vowelsInInputMesh = inputMessage.split('').filter((char) => 'AEIOUaeiou'.includes(char));

// console.log(vowelsInInputMesh)

const consonantsInMessage = inputMessage.split('').filter((char) => !'AEIOUaeiou'.includes(char) && char.trim() !== '');

console.log(consonantsInMessage);

//console.log(splittedString)

// const splittedString = string.split(' '); // Splits by spaces
// const splittedByComma = string.split(','); // Splits by commas
// const splittedByDash = string.split('-'); // Splits by dashes
// const splittedByCustom = string.split(/[\s,.-]/); // Splits by spaces, commas, or dashes using regex


