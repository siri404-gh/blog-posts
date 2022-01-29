/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head

  let count = 0

  const traverse = (node, prev) => {
    node.next && traverse(node.next, node)
    count++
    if (count === n) {
      if (prev) prev.next = node.next
      else head = head.next
    }
  }

  traverse(head)

  return head
}
