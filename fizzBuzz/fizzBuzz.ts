export function fizzBuzz(n: number): string | number {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

export function getFizzBuzzSequence(): (string | number)[] {
    const result: (string | number)[] = [];
    for (let i = 1; i <= 100; i++) {
        result.push(fizzBuzz(i));
    }
    console.log(result);
    return result;
}

// Run the function when file is executed directly
getFizzBuzzSequence();