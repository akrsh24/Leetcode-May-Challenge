/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let midFloorValue = Math.floor(nums.length / 2);
    let numMap = {}
    nums.forEach(num => {
        let count = numMap.hasOwnProperty(num) ? numMap[num] : 0
        numMap[num] = count + 1;
    });

    let majorityElement = 0;
    Object.keys(numMap).forEach(num => {
        if (numMap[num] > midFloorValue) {
            majorityElement = parseInt(num);
        }
    });

    return majorityElement;

};
