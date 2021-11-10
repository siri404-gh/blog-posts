# Implementation of bind in Javascript

```js
const obj1 = {
  num1: 1,
  num2: 2,
  add: function () {
    return this.num1 + this.num2
  },
}

const obj2 = {
  num1: 100,
  num2: 200,
}

Function.prototype.fbind = function (ctx) {
  const that = this
  return function () {
    return that.call(ctx)
  }
}

console.log(obj1.add.fbind(obj2)()) // 300
```

&nbsp;
