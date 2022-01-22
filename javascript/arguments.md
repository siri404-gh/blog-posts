# The arguments keyword

```js
add(1, 2, 3)

function add() {
  console.log(arguments) // [1, 2, 3, callee]
}

const add = () => {
  console.log(arguments) // Uncaught reference error
}

function add(...args) {
  console.log(args) // [1, 2, 3]
  console.log(arguments) // [1, 2, 3, callee]
}
```

&nbsp;