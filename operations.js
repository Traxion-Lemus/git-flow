export class BasicOperations {
    sum(...x) {
        return x.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}

