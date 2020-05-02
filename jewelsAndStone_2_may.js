/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    const splitJ = J.split("");
    const splitS = S.split("");

    const filteredArray = splitS.filter(x => {
        return splitJ.includes(x) && x;
    });

    return filteredArray.length;


};