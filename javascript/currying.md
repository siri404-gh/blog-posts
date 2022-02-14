# Implement currying in Javascript

## Code
```js
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return(...args1) => {
    if (args1.length >= fn.length) return fn(...args1)
    return (...args2) => currify(...args1, args2)
  }
}
```

## Tests

```js
(1)(2)(3)
(1, 2)(3)
(1, 2, 3, 4)
(1,2)(3), (1,2)(4)
```
