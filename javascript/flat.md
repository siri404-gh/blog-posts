# Implement Array flat in Javascript

```js
Array.prototype.myFlat = function () {
  let res = [];
  const arr = this;

  const traverse = (arr) => {
    arr.forEach((item) => {
      if (item.length) traverse(item);
      else res.push(item);
    });
  };

  traverse(arr);
  return res;
};

const arr = [1, 2, [3, 4, 5, [6, 7], 8, 9, [10]]];

console.log(arr.myFlat());
```
