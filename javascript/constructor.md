# Constructor functions

```js
function Node(val) {
  this.val = val
}

const n = new Node(10)
console.log(n) // { val: 10 };
```

## Difference between normal functions and constructor functions

```js
function Node(val) {
  this.val = val
  return val
}

const a = new Node(2) // { val: 2 }
const b = Node(2) // 2
```

## What if we use fat-arrow function definitions?

```js
const Node = val => {
  this.val = val
  return val
}

const a = new Node(2) // Uncaught TypeError: Node is not a constructor
const b = Node(2) // 2
```

&nbsp;
