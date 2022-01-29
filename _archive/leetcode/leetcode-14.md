# 14. Longest Common Prefix

#### _08 Sep 2020, Berlin_

## Problem

Write a function to find the longest common prefix string amongst an array of
strings.

## Solution

```js
const longestCommonPrefix = strs => {
  if (!strs.length) return ''
  let res = strs[0]
  strs.forEach(str => {
    res = lcp(res, str)
  })
  return res
}

const lcp = (str1, str2) => {
  let res = ''
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] === str2[i]) res += str1[i]
    else return res
  }
  return res
}
```

## Complextiy

&nbsp;
