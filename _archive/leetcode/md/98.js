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
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (!root) return true
  let res = []

  const traverse = node => {
    node.left && traverse(node.left)
    res.push(node.val)
    node.right && traverse(node.right)
  }

  traverse(root)
  return res.every((val, i) => {
    if (i === 0) return true
    return val > res[i - 1]
  })
}
