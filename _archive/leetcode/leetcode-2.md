# 2. Add Two Numbers

## Problem

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a
single digit. Add the two numbers and return the sum as a linked list. You may
assume the two numbers do not contain any leading zero, except the number 0
itself.

## Solution

```js
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

const addTwoNumbers = (l1, l2) => {
  let p1 = l1
  let p2 = l2
  let sum
  let sumPointer
  let carry = 0

  const addToSum = num => {
    if (!sum) {
      sum = new ListNode(num)
      sumPointer = sum
    } else {
      sumPointer.next = new ListNode(num)
      sumPointer = sumPointer.next
    }
  }

  while (p1 || p2) {
    let s = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry
    carry = 0
    if (s > 9) {
      carry = 1
      s = s - 10
    }
    addToSum(s)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  if (carry) addToSum(carry)

  return sum
}
```
