# 9. Palindrome Number

#### 16 July 2020 by Sreeram Padmanabhan

## Problem

Determine whether an integer is a palindrome. An integer is a palindrome when it
reads the same backward as forward.

## Solution

```js
const isPalindrome = x => {
  if (x < 0) return false
  return isPalStr(Math.abs(x).toString())
}

const isPalStr = str => {
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
```

## Complexity

Time complexity: O(n) Space complexity: O(1)

&nbsp;
