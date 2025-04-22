export interface Printer {
  print(message: string): void;
}

export function fizzBuzz(x: number, printer: Printer): void {
  let message = "fizz";

  if (x % 5 === 0) {
    message = "buzz";
  }
 
  printer.print(message);
}
