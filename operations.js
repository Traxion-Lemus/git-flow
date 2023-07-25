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
}

