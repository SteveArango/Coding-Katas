export function primeNumberChecker(number: number): boolean {
    // Rule 1: Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // Rule 2: 2 is prime
    if (number === 2) {
        return true;
    }

    // Rule 3: Even numbers greater than 2 are not prime
    if (number % 2 === 0) {
        return false;
    }

    // Rule 4: Check odd numbers for divisibility up to square root
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    // Rule 5: If no divisors found, number is prime
    return true;
}