import {describe, it, expect} from 'vitest';
import { isLeapYear } from './leapYears';

describe('Leap Years', () => {
    it('returns false if the year is 2001', () => {
        const year = 2001;

        const result = isLeapYear(year);

        expect(result).toBe(false)
    });
    it('returns true if the year is 1996', () => {
        const year = 1996;

        const result = isLeapYear(year);

        expect(result).toBe(true)

    });
    it('returns false if the year is 1900', () => {

        const year = 1900;

        const result = isLeapYear(year);

        expect(result).toBe(false)

    });
    it('returns true if the year is 2000', () => {
        const year = 2000;

        const result = isLeapYear(year);

        expect(result).toBe(true)
    });

    it('returns false if the year is 2002', () => {
        const year = 2002;

        const result = isLeapYear(year);

        expect(result).toBe(false)
    });
});