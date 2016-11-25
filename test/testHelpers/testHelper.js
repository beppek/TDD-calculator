'use strict';

module.exports = {
    getRandomArrayLength: randomArrayLength,
    getRandomNumbers: randomNumbers
}

/**
 * Use to generate random array length between 3 and 10
 */
function randomArrayLength() {
    return Math.floor((Math.random() * 10) + 3);
}

/**
 * Use to generate random numbers
 * @param arrayLength specifies how many new random numbers should be generated
 */
function randomNumbers(arrayLength) {
    var numbers = [];
    var i;
    for (i = 0; i < arrayLength; i += 1) {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        numbers.push(randomNumber);
    }
    return numbers;
}