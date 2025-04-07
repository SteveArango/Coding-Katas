import { describe, it, expect } from 'vitest';

describe('Hello World Test', () => {
    it('should return hello world', () => {
        const message = 'hello world';
        expect(message).toBe('hello world');
    });
});