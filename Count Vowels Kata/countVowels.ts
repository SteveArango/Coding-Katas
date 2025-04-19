// export function countVowels(str: string) {
//     const vowels = str.split('').filter((char) => 'AEIOUaeiou'.includes(char));
//     return vowels.length;
// }

///Refactor

export function countVowels(str: string) {
    const vowelsRegex = /[aeiou]/i;

    return str
    .split('')
    .filter((char) => vowelsRegex.test(char)).length;
    
}