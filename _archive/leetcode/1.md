# 1. Two Sum

#### 12 July 2020 by Sreeram Padmanabhan

## Problem

Given an array of integers, return indices of the two numbers such that they add
up to a specific target. You may assume that each input would have exactly one
solution, and you may not use the same element twice.

## Solution

```js
const twoSum = (arr, target) => {
  const map = {}

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    const comp = target - curr
    if (comp in map) return [i, map[comp]]
    map[curr] = i
  }

  return []
}
```

## Complexity

Time complexity: O(n) Space complexity: O(n)

&nbsp;
