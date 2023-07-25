import {BasicOperations} from "./operations.js";

const basic = new BasicOperations();

console.log(basic.addition(8, 9, 10));

console.log(basic.subtraction(20, 18))

console.log(basic.multiplication(3, 6))

const divisonResults = basic.division(16, 3);

console.log(`The quotient is ${divisonResults.quotient} and the remainder is ${divisonResults.remainder}`);