# Bind and its uses

```js
function Add() {
  return this.val1 + this.val2
}

const obj = { val1: 10, val2: 20 }
const boundAdd = Add.bind(obj)
console.log(boundAdd()) // 30
```

&nbsp;
