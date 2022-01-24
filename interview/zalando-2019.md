# Zalando 2019

&nbsp;

## Problem

Given an integer n, return any array containing n unique integers such that they add up to 0.

[1304. Find N Unique Integers Sum up to Zero](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/)

&nbsp;
## Solution

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let res = [];
  
  for (let i = 1; i <= Math.floor(n/2); i++) {
    res.push(i, -i);
  }
  
  if (n % 2 === 1) res.push(0);
  
  return res;
};
```