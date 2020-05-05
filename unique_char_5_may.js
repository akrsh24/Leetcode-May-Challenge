/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    s = s.split('');
    let allCharacterObject = {};

    for (let i = 0; i < s.length; i++) {
        let index;
        if (allCharacterObject.hasOwnProperty(s[i]))
            index = allCharacterObject[s[i]];
        else
            index = [];

        index.push(i);

        allCharacterObject[s[i]] = index;
    }

    let filteredCharacterObject = Object.keys(allCharacterObject).filter(charObj => allCharacterObject[charObj].length === 1);
    if (filteredCharacterObject.length === 0)
        return -1;
    else
        return allCharacterObject[filteredCharacterObject[0]];
};