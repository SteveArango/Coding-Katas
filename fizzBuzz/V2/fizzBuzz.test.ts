import { describe, it, expect, vi} from 'vitest';
import { fizzBuzz } from "./fizzBuzz"

describe('description', () => {
    it('prints fizz for the number 3', () => {
        const print = vi.fn();
        
        fizzBuzz(3, { print });

        expect(print).toHaveBeenCalledWith("fizz");
    });

    it('prints buzz for the number 5', () => {
        const print = vi.fn();
        
        fizzBuzz(5, { print });

        expect(print).toHaveBeenCalledWith("buzz");
    });
});