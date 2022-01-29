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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  const remove = (node, key) => {
    if (!node) return null
    if (key < node.val) node.left = remove(node.left, key)
    if (key > node.val) node.right = remove(node.right, key)
    if (key === node.val) {
      if (!node.left && !node.right) return null
      if (!node.left) return node.right
      if (!node.right) return node.left
      let tempNode = node.right
      while (tempNode.left) tempNode = tempNode.left
      node.val = tempNode.val
      node.right = remove(node.right, tempNode.val)
    }
    return node
  }
  return remove(root, key)
}
