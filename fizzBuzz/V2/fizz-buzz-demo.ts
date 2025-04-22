import { fizzBuzz, Printer } from "./fizzBuzz";
import * as fs from 'fs';

const consolePrinter: Printer = {
  print: (message: string) => {
    console.log(message);
  }
};

const filePrinter: Printer = {
  print: (message: string) => {
    // Define the output file path
    const outputFile = 'fizzbuzz-output.txt';
    
    // Append the message to file with a newline
    fs.appendFileSync(outputFile, message + '\n');
  }
}

fizzBuzz(5, filePrinter);
fizzBuzz(7, filePrinter);

// import "./fizzBuzz/V2/fizz-buzz-demo"