# 20. Valid Parentheses

#### 12 July 2020 by Sreeram Padmanabhan

## Problem

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets; Open brackets must be
closed in the correct order; Note that an empty string is also considered valid.

## Solution

```js
const isValid = str => {
  const comp = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  let stack = []

  str.forEach((s, i) => {
    if (comp[s] && stack[stack.length - 1] === comp[s]) stack.pop()
    else stack.push(s)
  })
  return stack.length === 0
}
```

## Complexity

Time complexity: O(n) Space complexity: O(n)

&nbsp;
