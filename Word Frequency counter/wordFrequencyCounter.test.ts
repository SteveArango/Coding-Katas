import {describe, it, expect} from 'vitest';
import { countConsonants } from './wordFrequencyCounter';    

describe('Word Frequency Counter Kata tests', () => {
    it('returns 0 for an empty string', () =>  {
        //Arrange
        const emptyString = '';
        //Act
        const result = countConsonants(emptyString);
        //Assert
        expect(result).toEqual(0)
    });
    it('returns 0 for a string with no consonants', () => {
        //Arrange
        const vowels = 'AEIOU';
        //Act
        const result = countConsonants(vowels);
        //Assert
        expect(result).toBe(0)
    });
    it('returns 1 for a string with one consonant', () => {
        //Arrange
        const consonant = 'r';
        //Act
        const result = countConsonants(consonant);
        //Assert
        expect(result).toBe(1)
    });
    it('returns the correct count for strings with multiple consonants', () => {
        //Arrange
        const string = 'Hello World'
        //Act
        const result = countConsonants(string);
        //Assert
        expect(result).toBe(7)
    });
    it('returns the correct count for strings with special characters', () => {
        //Arrange
        const specialcharsStr = 'Hello Steven'
        //Act
        const result = countConsonants(specialcharsStr);
        console.log(result)
        //Assert
        expect(result).toBe(7)
    });
    it('should count upper case words', () => {
        //Arrange
        const upperString = 'UPPER'
        //Act
        const result = countConsonants(upperString);
        //Assert
        expect(result).toBe(3)
    });
    it('should ignore numbers and special chars', () => {
        //Arrange
        const numbersAndSpecialChars = '123!@#$%^&*';
        //Act
        const result = countConsonants(numbersAndSpecialChars);
        //Assert
        expect(result).toBe(0)

    });
});