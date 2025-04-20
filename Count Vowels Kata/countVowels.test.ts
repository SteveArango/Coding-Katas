import { describe, it, expect } from 'vitest';
import { countVowels } from './countVowels';

describe('Count Vowels Kata', () => {
    it('returns 0 for empty strings', () => {
        //Arrange
        const emptyString = '';
        //Act
        const result = countVowels(emptyString);
        //Assert
        expect(result).toBe(0)
    });
    it('returns 0 for strings with no vowels', () => {
        //Arrange
        const noVowelString = 'XYZ';
        //Act
        const result = countVowels(noVowelString);
        //Assert
        expect(result).toBe(0)
    });
    it('returns 1 for a string with one vowel', () => {
        //Arrange
        const oneVowel = 'a'
        //Act
        const result = countVowels(oneVowel);
        //Assert
        expect(result).toBe(1)
    });
    it('returns the correct count for strings with multiple vowels', () => {
        //Arrange
        const multipleVowels = 'Multiple Vowels'
        //Act
        const result = countVowels(multipleVowels);
        //Assert
        expect(result).toBe(5)
    });
    it('returns the correct count for strings with mixed case vowels', () => {
        //Arrange
        const mixedCaseVowels = 'aEIoU'
        //Act
        const result = countVowels(mixedCaseVowels);
        //Assert
        expect(result).toBe(5)
    });
    it('returns the correct count for strings with special characters', () => {
        //Arrange
        const specialCharString = 'Hello, World!'
        //Act
        const result = countVowels(specialCharString);
        //Assert
        expect(result).toBe(3)
    });
    it('returns the correct count for strings with numbers', () => {    
        //Arrange
        const numberString = '12345'
        //Act
        const result = countVowels(numberString);
        //Assert
        expect(result).toBe(0)
    }
    );
    it('returns the correct count for strings with spaces', () => {     
        //Arrange
        const spaceString = 'Hello World'
        //Act
        const result = countVowels(spaceString);
        //Assert
        expect(result).toBe(3)
    }
    );
    it('returns the correct count for strings with mixed characters', () => {
        //Arrange
        const mixedString = 'H3ll0 W0rld!'
        //Act
        const result = countVowels(mixedString);
        //Assert
        expect(result).toBe(0)
    }
    );         
})