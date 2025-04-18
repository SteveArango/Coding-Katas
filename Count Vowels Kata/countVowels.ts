export function countVowels(str: string) {
    const vowels = str.split('').filter((char) => 'AEIOUaeiou'.includes(char));
    return vowels.length;
}