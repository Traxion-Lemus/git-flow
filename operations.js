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

    /**
     * Performs the multiplication operation
     *
     * @param multiplier
     * @param multiplicand
     * @returns {number} product
     */
    multiplication(multiplier, multiplicand){
        if (isNaN(multiplier) || isNaN(multiplicand)) {
            throw "No numbers";
        }
        return multiplier * multiplicand;
    }
}

