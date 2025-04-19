import { describe, it, expect } from "vitest";
import { primeNumberChecker } from "./primeNumberChecker";

describe('Prime Number Validator', () => {
    it('should identify non-prime numbers less than 2', () => {
        // Arrange
        const lessThanTwo = 1;
        // Act
        const result = primeNumberChecker(lessThanTwo);
        // Assert
        expect(result).toBe(false);
    });

    it('should identify 2 as the only even prime number', () => {
        // Arrange
        const smallestPrime = 2;
        // Act
        const result = primeNumberChecker(smallestPrime);
        // Assert
        expect(result).toBe(true);
    });

    it('should identify non-prime even numbers greater than 2', () => {
        // Arrange
        const evenNumber = 4;
        // Act
        const result = primeNumberChecker(evenNumber);
        // Assert
        expect(result).toBe(false);
    });

    it('should identify prime numbers greater than 2', () => {
        // Arrange
        const oddPrime = 7;
        // Act
        const result = primeNumberChecker(oddPrime);
        // Assert
        expect(result).toBe(true);
    });
});