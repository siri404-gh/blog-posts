# Singleton pattern

```js
/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    //private function to create methods and properties
  }
  return {
    getInstance: function () {
      if (!objInstance) create();
      return objInstance;
    },
  };
})();

//let obj1 = obj.getInstance();
// let obj2 = obj.getInstance();
```
