/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let complementedNumber = ~num;
    let maskedNumber = Math.pow(2, num.toString(2).length) - 1;
    return complementedNumber & maskedNumber;
};