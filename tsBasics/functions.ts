// Basic Function Examples
function addTwo(num: number): number {
    return num + 2;
}

function convertUpper(str: string): string {
    return str.toUpperCase();
}

// Arrow Function Examples
const loginUser = (name: string = 'Guest', email: string): string => {
    return `User ${name} has logged in with email ${email}`;
}

function getValue(myVal: number): number | string {
    if (myVal === 0) {
        return 'Steve is a warrior';
    }
    return myVal;
}

const arrowFunction = (num: number): number => num;

// Array Method Examples

// 1. Map Examples
const heroes = ['Don Juan', 'Genaro', 'Pablo', 'Nawal', 'Dante'];
const heroeMessages = heroes.map((hero: string) => `${hero} is awesome`);

const numbers = [3, 6, 9];
const numbersMultiplied = numbers.map((num: number) => num * 3);

const list = [2, 4, 6, 8, 10];
const listPlusTwo = list.map((num: number) => num + 2);

// 2. String and Filter Examples
const inputMessage = 'Steve is a real Software Quality Assurance Automation Engineer';

// Vowel detection helper functions
const isVowel = (char: string): boolean => 'AEIOUaeiou'.includes(char);
const isNotWhitespace = (char: string): boolean => char.trim() !== '';

// Find vowels and consonants
const vowels = inputMessage
    .split('')
    .filter(isVowel);

const consonants = inputMessage
    .split('')
    .filter(char => !isVowel(char))
    .filter(isNotWhitespace);

// Example Usage
console.log('Consonants:', consonants);


