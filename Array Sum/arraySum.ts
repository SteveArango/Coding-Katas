export function sum(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
}