# Delivery Hero 2022

&nbsp;

## Problem

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Leetcode - [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

&nbsp;

## Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s, left, right) {
  if (!s) return true

  while (left < right) {
    if (s[left] !== s[right]) return false
    left++
    right--
  }
  return true
};

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1
  
  while (left < right) {
    if (s[left] !== s[right]) return isPalindrome(s,left+1, right) || isPalindrome(s, left, right-1)
    left++
    right--
  }
  
  return true
};
```