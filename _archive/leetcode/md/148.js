/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var sortList = function (head) {
  if (!head) return head
  let newHead
  let newPointer

  const addToList = num => {
    if (!newHead) {
      newHead = new ListNode(num)
      newPointer = newHead
    } else {
      newPointer.next = new ListNode(num)
      newPointer = newPointer.next
    }
  }

  let res = []

  let pointer = head

  while (pointer) {
    res.push(pointer.val)
    pointer = pointer.next
  }

  res = res.sort((a, b) => a - b)

  res.forEach(num => {
    addToList(num)
  })

  return newHead
}
