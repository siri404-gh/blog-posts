Implement Array reduce in Javascript

```js
Array.prototype.myReduce = function (reducer, initialVal) {
  const arr = this
  let res = initialVal

  arr.forEach(item => {
    res = reducer(res, item)
  })

  return res
};

console.log([1, 2, 3, 4, 5].myReduce((acc, item) => acc + item, 0))
```
