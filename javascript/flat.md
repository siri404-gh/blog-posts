# Implement Array.prototype.flat in Javascript

## Code
```js
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  let res = []

  const flatten = (arr, _depth) => {
    console.log(arr, _depth)
    arr.forEach(item => {
      if (Array.isArray(item) && _depth < depth) flatten(item, _depth+1)
      else res.push(item)
    })
  }

  flatten(arr, 0)

  return res
}
```

## Tests

```js
flat([1,[2],[3,[4]]])
flat([1,[2],[3,[4]]], 1)
flat([1,[2],[3,[4]], 2)
flat([1,2,[3,4,[5,6,[7,8,[9,10]]]]], Infinity)
```
