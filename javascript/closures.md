# Closures in Javascript

```js
const adder = function (num1) {
  return function (num2) {
    return num1 + num2
  }
}

const adder5 = adder(5)

console.log(adder5(10)) // 15
console.log(adder5(100)) // 105
```

&nbsp;
