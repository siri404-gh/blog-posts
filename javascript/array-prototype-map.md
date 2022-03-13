# Array.prototype.map

## Implementation

```js
Array.prototype.myMap = function(fn, thisObj) {
  let res = []

  this.forEach((item, i) => {
    res[i] = fn.call(thisObj, item, i, this)
  })

  return res
}
```

## Tests

```
[1,2,3].myMap(num => num * 2) // [2, 4, 6]

// thisObj = { name: 'sreeram' }
[1,2,3].myMap((num, i) => thisObj.name, thisObj)
```

&nbsp;