import { describe, it, expect } from 'vitest';
import { fizzBuzz, getFizzBuzzSequence } from './fizzBuzz';

describe('FizzBuzz Sequence', () => {
    it('generates correct sequence of 100 numbers with FizzBuzz rules', () => {
        const sequence = getFizzBuzzSequence();
        
        expect(sequence.length).toBe(100);
        expect(sequence[2]).toBe("Fizz");  // 3rd number
        expect(sequence[4]).toBe("Buzz");  // 5th number
        expect(sequence[14]).toBe("FizzBuzz");  // 15th number
        expect(sequence[0]).toBe(1);  // 1st number
    });
});