// =====================================================
// INTRODUCTION TO TYPESCRIPT OBJECTS FOR BEGINNERS
// =====================================================

// ----------------------
// Basic Object Literals
// ----------------------

// In JavaScript/TypeScript, an object is a collection of key-value pairs
// This is the simplest way to create an object:

const dog = {
    name: 'Dante',
    age: 4,
    isSmart: true
};

console.log(dog)                    // Log the entire object
console.log(dog.name);             // Access with dot notation
console.log(dog['age']);          // Access with bracket notation

// ----------------------
// Object Type Annotations
// ----------------------

// TypeScript allows to define the shape of objects with type annotations
const employee: { id: number; name: string; department: string } = {
    id: 777,
    name: "Steve",
    department: "Engineering"
};

// This prevents adding incorrect properties or values
// Uncomment to see the error:
// employee.salary = 50000; // Error: Property 'salary' does not exist


// ----------------------
// Object Type Aliases
// ----------------------

// For reusable object types, use the 'type' keyword
type Car = {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
};

// Now you can create multiple objects with the same structure
const car1: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    isElectric: false
};

const car2: Car = {
    make: "NIO",
    model: "et9",
    year: 2025,
    isElectric: true
};

// ----------------------
// Interfaces
// ----------------------

// Interfaces are another way to define object shapes
// They're similar to type aliases but with some differences
interface Product {
    id: number;
    name: string;
    price: number;
};

const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999.99
};

const cellphone: Product = {
    id: 2,
    name: 'Iphone 18',
    price: 2500.00
}


// ----------------------
// Optional Properties
// ----------------------

// Use the ? symbol to make properties optional
interface Book {
    title: string;
    author: string;
    pages: number;
    genre?: string;         // Optional property
    publishDate?: Date;     // Optional property
}

// These are both valid Book objects
const book1: Book = {
    title: "Tales of Power",
    author: "Carlos Castaneda",
    pages: 304
};

const book2: Book = {
    title: "El Conocimiento Silencioso",
    author: "Carlos Castaneda",
    pages: 377,
    genre: "Reality",
    publishDate: new Date('1977-01-01')
}

// ----------------------
// Readonly Properties
// ----------------------

// Use readonly to prevent properties from being changed after creation
interface User {
    readonly id: number;    // Can't be modified after creation
    username: string;
    email: string;
}

const userName: User = {
    id: 777,
    username: "Steve123",
    email: "automationEngineer@example.com"
};

// This would cause an error:
// userName.id = 54321;


// ----------------------
// Nested Objects
// ----------------------

// Objects can contain other objects
interface Address {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}

interface Customer {
    name: string;
    contactInfo: {
        email: string;
        phone?: string;
    };
    address: Address;
}

const customer: Customer = {
    name: "Alice Johnson",
    contactInfo: {
        email: "alice@example.com",
        phone: "555-123-4567"
    },
    address: {
        street: "123 Main St",
        city: "Boston",
        zipCode: "02108",
        country: "USA"
    }
};

const customer2: Customer = {
    name: 'Steve',
    contactInfo: {
        email: "test@steve.com",
    },
    address: {
        street: "Bourbon",
        city: "Medayork",
        zipCode: "10001",
        country: "Colombia"
    }
};

console.log(customer.contactInfo.email);  // Accessing nested properties
console.log(customer.address.city);


// ----------------------
// Index Signatures
// ----------------------

// When you don't know all property names in advance
interface Dictionary {
    [key: string]: string;
}

const colors: Dictionary = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

// You can add any string key with a string value
colors.yellow = "#FFFF00";


// ----------------------
// Object Methods
// ----------------------

// Objects can contain functions (methods)
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiplication(a: number, b: number): number;
    division(a: number, b: number): number;
}


const calc: Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiplication(a, b) {
        return a * b;
    },
    division(a, b) {
        return a / b
    },
};

console.log(calc.add(5, 3));       // 8
console.log(calc.subtract(10, 4)); // 6


// ----------------------
// Object Destructuring
// ----------------------

// Extract properties into variables
const { name: customerName, contactInfo } = customer;
console.log(customerName);  // "Alice Johnson"

// Nested destructuring
const { email, phone } = contactInfo;
console.log(email); // "alice@example.com"


// ----------------------
// Object Spreading
// ----------------------

// Copy properties from one object to another
const defaults = { theme: "light", fontSize: 14 };
const userPreferences = { fontSize: 16, showNotifications: true };

// Later properties override earlier ones with the same name
const settings = { ...defaults, ...userPreferences };
console.log(settings);
// Output: { theme: "light", fontSize: 16, showNotifications: true }


// ----------------------
// Practice Exercise
// ----------------------

// Try creating a 'Movie' interface with properties for:
// - title (string)
// - director (string)
// - releaseYear (number)
// - genres (array of strings)
// - ratings (object with properties for different review sites)

interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    genres: string [];
    ratings: {
        [site: string]: number; // Example: ratings for different review sites
    };
}

// Then create an object that implements this interface

const cinema: Movie = {
    title: "Paris Texas",
    director: "Wim Wenders",
    releaseYear: 1984,
    genres: ['neo-Western', 'Suspense'],
    ratings: { RottenTomatoes: 24}
}