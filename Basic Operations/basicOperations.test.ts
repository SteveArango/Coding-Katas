import { describe, it, expect } from 'vitest';

describe('Hello World Test', () => {
    it('should return hello world', () => {
        const message = 'hello world';
        expect(message).toBe('hello world');
    });
});

describe("adding numbers in js/ts", () => {
    it("uses the add function", () => {
        function add(a: number, b: number) {
            return a + b;
        }
        expect(add(5, 2)).toBe(7);
    });

    it("Uses the add function with negative numbers", () => {
        function addNegatives(a: number, b: number) {
            return a + b;
        }
        expect(addNegatives(-5, -5)).toBe(-10);
    });

    it("Subtract numbers", () => {
        function subtraction(a: number, b: number) {
            return a - b;
        }
        expect(subtraction(7, 7)).toBe(0);
    });

    it("adding uses the + sign", () => {
        const result = 1 + 2;
        expect(result).toBe(3);
    });
});