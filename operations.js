export class BasicOperations {

    /**
     * Takes n numbers and returns the sum, also filters the input in order to avoid an error
     *
     * @param addends
     * @returns {*} sum
     */
    addition(...addends) {
        return addends
            .filter(value => !isNaN(value))
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }
}

