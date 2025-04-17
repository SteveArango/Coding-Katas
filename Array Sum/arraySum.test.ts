import {describe, it, expect } from 'vitest';

import { sum } from './arraySum';

describe('Function to calculate the sum of an array of numbers.', () => {
    it('returns 0 if the array is empty', ()=> {
        //Arrange
        const emptyArray: number[] = [];
        //Act
        const result = sum(emptyArray);
        //Assert
        expect(result).toBe(0);
    });
    it('returns the number itself if the array contains only one element', () => {
        //Arrange
        const singleElementArray: number[] = [5];
        //Act
        const result = sum(singleElementArray);
        //Assert
        expect(result).toBe(5);
    });
    it('returns the sum of two numbers', () => {
        //Arrange
        const addTwoNumbers: number[] = [7,7];
        //Act
        const result = sum(addTwoNumbers);
        //Assert
        expect(result).toBe(14)
    });
    it('returns the sum of more than 3 numbers', () => {
        //Arrange
        const sumSeveralNumbers: number[] = [3,6,9,12]
        //Act
        const result = sum(sumSeveralNumbers);
        //Assert
        expect(result).toBe(30)
    });
});