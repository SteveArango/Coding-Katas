import { describe, it, expect } from 'vitest';
import { fizzBuzz, getFizzBuzzSequence } from './fizzBuzz';

describe('FizzBuzz Sequence', () => {
    it('generates sequence until finding FizzBuzzWhizzBang', () => {
        const sequence = getFizzBuzzSequence();

        expect(sequence[2]).toBe("Fizz");  
        expect(sequence[4]).toBe("Buzz");     
        expect(sequence[6]).toBe("Whizz");    
        expect(sequence[10]).toBe("Bang");    
        
        expect(sequence[14]).toBe("FizzBuzz"); 
        expect(sequence[20]).toBe("FizzWhizz"); 
        
        const lastValue = sequence[sequence.length - 1];
        expect(lastValue).toBe("FizzBuzzWhizzBang");
    });
});