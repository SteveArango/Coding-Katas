// ARRAYS IN TYPESCRIPT

// String Array
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Add element to the end of array
const durazno = fruits.push('Melocoton');

// Add element to the beginning of array
const maracuya = fruits.unshift('Maracuya');

// Replace element at index 0
fruits[0] = 'Banzano';

console.log('Fruits array:', fruits);

// Mixed Array (Union Type)
let guitars: (string | number)[] = ["Gibson", "Fender", "PRS", 5150];

// Mapping through array
const whatever = guitars.map((item) => {
    return item;
});

// Filter array to get only strings
const filtered = guitars.filter((item) => {
    return typeof item === 'string';
});

console.log('Filtered guitars (strings only):', filtered);

// Creating and populating an array
let bands: string[] = [];
bands.push('Metallica', 'Van Halen', 'Guns and Roses', 'Aerosmith');

console.log('Bands:', bands);

// TUPLES IN TYPESCRIPT
// Fixed-length arrays with predefined types in specific positions

// Basic tuple example
let myFirstTuple: [string, number] = ['Genaro', 77];

// Destructuring a tuple
let [personName, age] = myFirstTuple;
console.log(`Name: ${personName}, Age: ${age}`);

// Another tuple example
let tuple: [boolean, number, string] = [false, 777, 'string'];
// Note: tuple.push() can break tuple constraints, so it's commented out
// tuple.push(true, 1577,'String')

// Modifying tuple values
tuple[0] = true;

console.log('Modified tuple:', tuple);

// OBJECTS IN TYPESCRIPT

// Basic object with type annotation
type Person = {
    name: string;
    age: number;
    active: boolean;
};

// Creating an object with the Person type
const person: Person = {
    name: 'John',
    age: 30,
    active: true
};

console.log('Person object:', person);

// Object with optional properties
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

// Creating products with and without optional properties
const product1: Product = { id: 1, name: 'Laptop', price: 999.99 };
const product2: Product = { id: 2, name: 'Phone', price: 699.99, description: 'Latest model' };

console.log('Products:', product1, product2);

// Nested objects
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Employee {
    id: number;
    name: string;
    address: Address;
}

const employee: Employee = {
    id: 101,
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Techville',
        zipCode: '12345'
    }
};

console.log('Employee with nested address:', employee);
