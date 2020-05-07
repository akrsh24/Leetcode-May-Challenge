/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    // //console.log("Root->", root);
    const newRoot = traverseBFS(root);
    console.log("newRoot->", newRoot);
    const xIndex = newRoot.indexOf(x);
    const yIndex = newRoot.indexOf(y);
    const minIndex = xIndex <= yIndex ? xIndex : yIndex;
    let levelIndex, i = 0, foundIndex = false;

    // check for index
    while (!foundIndex) {
        if (minIndex >= Math.pow(2, i) - 1 && minIndex <= Math.pow(2, i + 1) - 2) {
            foundIndex = true;
            levelIndex = i;
        }
        i++;
    }

    //check for same level
    const leastLevelEqn = Math.pow(2, levelIndex) - 1;
    const maxLeastEqn = Math.pow(2, levelIndex + 1) - 2;
    let xParent, yParent;

    console.log("xIndex->", xIndex);
    console.log("yIndex->", yIndex);
    console.log(leastLevelEqn, maxLeastEqn, foundIndex, levelIndex);

    if ((xIndex >= leastLevelEqn && xIndex <= maxLeastEqn) && (yIndex >= leastLevelEqn && yIndex <= maxLeastEqn)) {
        xParent = Math.ceil(xIndex / 2) - 1;
        yParent = Math.ceil(yIndex / 2) - 1;
        console.log("xParent->", xParent);
        console.log("yParent->", yParent);
        return xParent === yParent ? false : true;
    }
    return false;
};

function traverseBFS(root) {
    let queue = [root]
    let res = []


    while (queue.length) {
        // //console.log("Queue->", queue);
        let curr = queue.shift()
        if (curr === null && queue.length === 0)
            break;

        if (curr === null)
            res.push(null);

        else {
            if (curr.left === null && curr.right === null) {
                res.push(curr.val);
            }
            else if (curr.left !== null || curr.right !== null) {
                res.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            }
        }
    }

    return res;
}
