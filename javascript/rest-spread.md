# Rest and Spread

#### 31 May 2021

&nbsp;

## Rest parameters

Rest parameter is used to accept an indefinite number of parameters in a
function, packed into an array. These kinds of functions are called as variadic
functions. In mathematics, these are functions with an indefinite arity. i.e,
one which accepts a variable number of arguments.

Consider the following function to add 2 numbers:

```js
function add(a, b) {
  return a + b
}
```

&nbsp;

Invoking it like `add(1, 2, 3, 4, 5)` is not expected. So what if you wanted to
add not just 2 numbers and didnt know the the number of arguments beforehand.
This is where the rest parameter comes in.

```js
function add(...nums) {
  let result = 0
  for (let arg of args) result += arg
  return result
}

add(1, 2, 3, 4, 5) // returns 15
```

&nbsp;

## Spread operator

Spread operator is used to unpack iterables into individual elements.

```js
const a = [1, 2, 3, 4, 5]
Math.max(...a) // 5
```

&nbsp;
