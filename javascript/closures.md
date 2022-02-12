# Closures in Javascript

```js
const adder = function (num1) {
  return function (num2) {
    return num1 + num2;
  };
};

const adder5 = adder(5);

console.log(adder5(10)); // 15
console.log(adder5(100)); // 105
```

&nbsp;

## Fix the problem

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000 * i); // Should print 0 1 2 3 4
}
```

### Solutions

```js
for (var i = 0; i < 5; i++) {
  setTimeout((x => () => console.log(x))(i), 1000 * i)
}

// using IIFE

for (var i = 0; i < 5; i++) {
  setTimeout(
    (function(x) {
      function() {
        console.log(x)
      }
    })(i)
    , 1000 * i)
}

// using bind

for (var i = 0; i < 5; i++) {
  setTimeout(
    (function(x) {
      console.log(x)
    }).bind(null, i)
  , 1000 * i)
}
```
