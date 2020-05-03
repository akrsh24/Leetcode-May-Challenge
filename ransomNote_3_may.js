/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let ransomString = ransomNote.split('');
    let isPresent = true, i = 0;
    while (isPresent && i < ransomString.length) {
        if (magazine.indexOf(ransomString[i]) === -1)
            isPresent = false;

        else
            magazine = magazine.replace(ransomString[i], ransomString[i].toUpperCase());
        i++;
    }

    return isPresent;
};