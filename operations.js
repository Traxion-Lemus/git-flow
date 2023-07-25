export class BasicOperations {

    /**
     * Performs the addition between n numbers
     *
     * @param addends
     * @returns {*} sum
     */
    addition(...addends) {
        return addends
            .filter(value => !isNaN(value))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    /**
     * Performs the subtraction operation between two numbers
     *
     * @param minuend
     * @param subtrahend
     * @returns {number} difference
     */
    subtraction(minuend, subtrahend) {
        if (isNaN(minuend) || isNaN(subtrahend)) {
            throw "No numbers"
        }
        return minuend - subtrahend;
    }
}

