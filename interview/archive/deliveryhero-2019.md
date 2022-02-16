# Delivery Hero 2019

&nbsp;

## Problem

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

&nbsp;

## Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */

String.prototype.isAlphaNumeric = function() {
  const ascii = this.charCodeAt(0);
  const codes = [[48, 57], [65, 90], [97, 122]];
  
  return codes.some(([left, right]) => (ascii >= left && ascii <= right))
}

var isPalindrome = function(s) {
  if (!s) return true
  let left = 0;
  let right = s.length - 1
  
  while (left < right) {
    if (!s[left].isAlphaNumeric()) left++
    else if (!s[right].isAlphaNumeric()) right--
    else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    else {
      left++
      right--
    }
  }
  return true
};
```