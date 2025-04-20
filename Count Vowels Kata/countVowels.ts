export function countVowels(str: string): number {
    const vowelsRegex = /[aeiou]/gi;
    return (str.match(vowelsRegex) || []).length;
}