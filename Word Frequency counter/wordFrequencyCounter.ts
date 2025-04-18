export function countConsonants(consonants: string): number {
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;

    return consonants
        .split('')
        .filter((char) => consonantRegex.test(char))
        .length;
}
