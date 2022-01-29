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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root) return null
  let res = []

  const traverse = node => {
    if (!node) return null
    node.left && traverse(node.left)
    res.push(node.val)
    node.right && traverse(node.right)
  }

  traverse(root)

  return res[k - 1]
}
