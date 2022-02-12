# Revealing module pattern

```js
//Turn this object literal into a module that only exposes the render method

let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {},
};

// Using an IIFE

const myModule = (function () {
  const data = [];

  const add = () => {};

  const render = () => {};

  return { render };
})();
```
