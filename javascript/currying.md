# Currying in Javascript

## Problem

```js
const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
```

## Solution

```js
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function currify(...args1) {
    if (args1.length === fn.length) return fn(...args1)
    return function(...args2) {
      return currify(...args1, ...args2)
    }
  }
}
```

## Time complexity

O(n) where n = fn.length

## Space complexity

O(n) where n = fn.length

## Follow up

Currying with placeholder support

```js
function curry(fn) {
  const currify = function(...args) {
    const _args = args.slice(0, fn.length)
    if (_args.length === fn.length && _args.every(item => item !== curry.placeholder)) return fn(...args)

    return function(...args2) {
      return currify(...args.map(arg => {
        if (arg === curry.placeholder) return args2.shift() ?? curry.placeholder
        return arg
      }), ...args2)
    }
  }
  return currify
}
```
## 