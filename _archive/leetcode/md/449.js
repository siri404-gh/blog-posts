/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return ''

  let res = []

  let q = [root]

  while (q.length) {
    const node = q.shift()
    res.push(node.val)
    node.left && q.push(node.left)
    node.right && q.push(node.right)
  }

  return res.join('-')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const add = (root, val) => {
  if (!root) return root

  const traverse = node => {
    if (val < node.val) {
      if (!node.left) node.left = new TreeNode(val)
      else traverse(node.left)
    }
    if (val > node.val) {
      if (!node.right) node.right = new TreeNode(val)
      else traverse(node.right)
    }
  }

  traverse(root)
}

var deserialize = function (data) {
  if (!data) return null
  const tree = data.split('-').map(char => +char)

  let root

  tree.forEach(num => {
    if (!root) root = new TreeNode(num)
    else add(root, num)
  })

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
