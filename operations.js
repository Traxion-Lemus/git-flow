export class BasicOperations {

    /**
     * Takes n numbers and returns the sum, also filters the input in order to avoid an error
     *
     * @param x
     * @returns {*}
     */
    sum(...x) {
        return x
            .filter(value => !isNaN(value))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}

