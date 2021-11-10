# Apply

### Example 1 - Passing context

```js
function Add() {
  return this.val1 + this.val2
}

const obj1 = {
  val1: 10,
  val2: 20,
}

console.log(Add.apply(obj1)) // 30
```

&nbsp;

### Example 2 - Passing context and arguments as array

```js
function Person() {
  this.fullName = function (age, sex) {
    return `${this.firstName} ${this.lastName} ${age} ${sex}`
  }
}

const person1 = new Person()

const obj2 = {
  firstName: 'Sreeram',
  lastName: 'Padmanabhan',
}

console.log(person1.fullName.apply(obj2, [30, 'M'])) // Sreeram Padmanabhan 30 M
```

&nbsp;

### Example 3 - Passing array as comma seperated arguments

```js
const numbers = [1, 2, 3, 4, 5]

console.log(Math.max.apply(null, numbers)) // 5
```

&nbsp;
