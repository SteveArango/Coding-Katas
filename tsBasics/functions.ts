// Function to add 2 to any number

function addTwo(num: number) {
    return num + 2;
}
addTwo(7);

//String function to convert any string to upper

function convertUpper(str: string){
    return str.toUpperCase();
}
//console.log(convertUpper("A la flaca le gusta Steve"));

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

console.log(loginUser('Steve', 'test'))
console.log(loginUser(undefined, 'test@test.com'))

