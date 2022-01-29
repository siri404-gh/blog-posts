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
 * @return {number[]}
 */
var largestValues = function(root) {
  let res = []
  if (!root) return res
  
  const traverse = (node, depth = 0) => {
    node.left && traverse(node.left, depth + 1)
    node.right && traverse(node.right, depth + 1)
    res[depth] = Math.max(res[depth] ?? Number.NEGATIVE_INFINITY, node.val)
  }
                          
  traverse(root)
  return res
};