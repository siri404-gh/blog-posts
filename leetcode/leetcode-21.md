# 21. Merge Two Sorted Lists

#### 08 July 2020 by Sreeram Padmanabhan

## Problem

Merge two sorted linked lists and return it as a new sorted list. The new list
should be made by splicing together the nodes of the first two lists.

## Solution

```js
const mergeTwoLists = (l1, l2) => {
  let p1 = l1
  let p2 = l2
  let merged = null
  let p

  const addToMerged = val => {
    if (!merged) {
      merged = new ListNode(val)
      p = merged
    } else {
      p.next = new ListNode(val)
      p = p.next
    }
  }

  while (p1 || p2) {
    if (p1 && p2) {
      if (p1.val > p2.val) {
        addToMerged(p2.val)
        p2 = p2.next
      } else if (p2.val > p1.val) {
        addToMerged(p1.val)
        p1 = p1.next
      } else {
        addToMerged(p1.val)
        addToMerged(p2.val)
        p1 = p1.next
        p2 = p2.next
      }
    } else if (p1) {
      addToMerged(p1.val)
      p1 = p1.next
    } else if (p2) {
      addToMerged(p2.val)
      p2 = p2.next
    }
  }

  return merged
}
```

## Complexity

Time complexity: O(m+n) Space complexity: O(1)

&nbsp;
