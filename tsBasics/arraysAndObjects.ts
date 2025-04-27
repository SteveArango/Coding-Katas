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
let myFirstTuple: [name: string, age: number] = ['Genaro', 77];

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
const individual: Person = {
    name: 'John',
    age: 30,
    active: true
};

console.log('Person object:', individual);

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
    country: string;
}

interface Employee {
    id: number;
    name: string;
    address: Address;
}

const staffMember: Employee = {
    id: 101,
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Techville',
        zipCode: '12345',
        country: 'USA'
    }
};

console.log('Employee with nested address:', staffMember);

// ARRAY OF OBJECTS
console.log('\n--- ARRAY OF OBJECTS ---');

// [{}] is an array containing one empty object
let singleEmptyObject: object[] = [{}];
console.log('Array with single empty object:', singleEmptyObject);
console.log('Type:', typeof singleEmptyObject); // 'object' (arrays are objects in JavaScript)
console.log('Is Array?', Array.isArray(singleEmptyObject)); // true

// Array of multiple objects
let people: { name: string, age: number }[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

console.log('Array of people objects:', people);
console.log('First person:', people[0]);
console.log('Second person name:', people[1].name);

// Empty array of objects - ready to be filled
let emptyPeopleArray: object[] = [];
console.log('Empty array (ready for objects):', emptyPeopleArray);

// Adding objects to the empty array
emptyPeopleArray.push({ id: 1, role: 'admin' });
emptyPeopleArray.push({ id: 2, role: 'user' });
console.log('After adding objects:', emptyPeopleArray);

// Array of objects with different shapes (using union type)
let mixedObjectsArray: ({ id: number, name: string } | { productId: string, price: number })[] = [
    { id: 1, name: 'User' },
    { productId: 'P100', price: 29.99 }
];

console.log('Array with different object types:', mixedObjectsArray);

// Practical example: JSON data often comes as arrays of objects
const jsonExample = `[
    {"id": 1, "task": "Learn TypeScript", "completed": false},
    {"id": 2, "task": "Build a project", "completed": true}
]`;

const todoItems = JSON.parse(jsonExample);
console.log('Parsed JSON (array of objects):', todoItems);
console.log('First todo task:', todoItems[0].task);
