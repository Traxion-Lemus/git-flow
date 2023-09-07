import { BasicOperations } from "./operations.js";

const basic = new BasicOperations();

console.log(basic.addition(8, 9, 10));

console.log(basic.subtraction(20, 18))

console.log(basic.multiplication(3, 6))

console.log(basic.power(3, 4))

const divisonResults = basic.division(16, 3);

const squareRootResult = basic.squareRoot(9);

console.log(`The quotient is ${divisonResults.quotient} and the remainder is ${divisonResults.remainder}`);