import { describe, it, expect } from 'vitest';
import { findMax } from './findMaxNumber';

describe('Find Max Number', () => {
    it('should return null for empty array', () => {
        //Arrange
        const emptyArray: number [] = [];
        //Act
        const result = findMax(emptyArray);
        //Assert
        expect(result).toBe(null)
    });
});

