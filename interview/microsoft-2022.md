# Microsoft 2022

&nbsp;

## Problem

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

[1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/)

&nbsp;

## Solution

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  if (!original || !cloned) return null
  let ret;
  
  const traverse = (original, cloned) => {
    original.left && traverse(original.left, cloned.left)
    if (original.val === target.val) ret = cloned
    original.right && traverse(original.right, cloned.right)
  }
  
  traverse(original, cloned)
  return ret
};
````
