// Arrays

// String Array
let fruits: string[] = ["Apple", "Banana", "Cherry"];

const durazno = fruits.push('Melocoton');

const maracuya = fruits.unshift('Maracuya');

const bananza = fruits[0] = 'Banzano';

console.log(fruits.length)

// Mixed Array
let guitars: (string | number)[] = ["Gibson", "Fender", "PRS", 5150];

const whatever = guitars.map((item) => {
    return item;
});

// Filter the array
const filtered = guitars.filter((item) => {
    return typeof item === 'string';
});

