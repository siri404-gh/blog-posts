/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1
  let p2 = l2
  let carry = 0
  let res = null
  let pRes

  const addToRes = val => {
    if (res) {
      pRes.next = new ListNode(val)
      pRes = pRes.next
    } else {
      res = new ListNode(val)
      pRes = res
    }
  }

  while (p1 || p2) {
    let sum = (p1?.val || 0) + (p2?.val || 0) + carry
    if (sum > 9) {
      sum = sum % 10
      carry = 1
    } else {
      carry = 0
    }
    addToRes(sum)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }

  if (carry) {
    addToRes(1)
  }

  return res
}
