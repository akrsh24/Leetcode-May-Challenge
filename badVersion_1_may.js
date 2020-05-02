/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let start = 1, end = n, startIndex, endIndex;

        if (n === 1)
            return 1;

        while (end >= start) {
            let mid = start + Math.floor((end - start) / 2);

            if (mid === start) {
                if (isBadVersion(start))
                    return start;

                else if (isBadVersion(start + 1))
                    return start + 1;
            }

            else if (end - start === 2) {
                startIndex = start;
                endIndex = end;
                break;
            }
            else if (!isBadVersion(mid)) {
                start = mid;
            }

            else if (isBadVersion(mid)) {
                end = mid;
            }
        }

        if (isBadVersion(startIndex))
            return startIndex;

        else if (isBadVersion(startIndex + 1))
            return startIndex + 1;

        else return endIndex;

    }
}