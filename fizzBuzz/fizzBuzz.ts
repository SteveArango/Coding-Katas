export function fizzBuzz(n: number): string | number {
    if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0 && n % 11 === 0) {
        return "FizzBuzzWhizzBang";
    }
    
    else if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
        return "FizzBuzzWhizz";
    }
    else if (n % 3 === 0 && n % 5 === 0 && n % 11 === 0) {
        return "FizzBuzzBang";
    }
    else if (n % 3 === 0 && n % 7 === 0 && n % 11 === 0) {
        return "FizzWhizzBang";
    }
    else if (n % 5 === 0 && n % 7 === 0 && n % 11 === 0) {
        return "BuzzWhizzBang";
    }
    
    else if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    }
    else if (n % 3 === 0 && n % 7 === 0) {
        return "FizzWhizz";
    }
    else if (n % 3 === 0 && n % 11 === 0) {
        return "FizzBang";
    }
    else if (n % 5 === 0 && n % 7 === 0) {
        return "BuzzWhizz";
    }
    else if (n % 5 === 0 && n % 11 === 0) {
        return "BuzzBang";
    }
    else if (n % 7 === 0 && n % 11 === 0) {
        return "WhizzBang";
    }
    
    else if (n % 3 === 0) {
        return "Fizz";
    }
    else if (n % 5 === 0) {
        return "Buzz";
    }
    else if (n % 7 === 0) {
        return "Whizz";
    }
    else if (n % 11 === 0) {
        return "Bang";
    }
    else {
        return n;
    }
}

export function getFizzBuzzSequence(): (string | number)[] {
    const result: (string | number)[] = [];
    let i = 1;
    
    while (true) {
        const value = fizzBuzz(i);
        result.push(value);
        
        if (value === "FizzBuzzWhizzBang") {
            break;
        }
        i++;
    }
    return result;
}
