# Context in Javascript

```js
var num1 = 10
var num2 = 20

const myButton = {
  num1: 1,
  num2: 2,
  add: function () {
    return this.num1 + this.num2
  },
  diff: () => {
    return this.num2 - this.num1
  },
}
```

### In normal functions

```js
console.log(myButton.add()) // 3

console.log(myButton.add.call()) // 30

console.log(myButton.add.call(myButton)) // 3

console.log(myButton.add.bind()()) // 30

const looseAdd = myButton.add
console.log(looseAdd()) // 30
```

### In fat-arrow functions

```js
console.log(myButton.diff()) // 10

const looseDiff = myButton.diff
console.log(looseDiff()) // 10

console.log(myButton.diff.call(myButton)) // 10
```

&nbsp;
