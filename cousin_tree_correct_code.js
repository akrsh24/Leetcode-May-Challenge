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
    const xPath = getPath(root, x);
    const yPath = getPath(root, y);

    if (xPath.length !== yPath.length) {
        return false;
    }

    return (xPath.length > 1 && xPath[xPath.length - 1] !== yPath[yPath.length - 1]) ? true : false;

}

function getPath(node, value, path = []) {
    if (!node)
        return;

    else if (node.val === value)
        return path;

    return getPath(node.left, value, path.concat(node.val)) || getPath(node.right, value, path.concat(node.val));

}

