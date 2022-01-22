# Classes in Javascript

```js
const Add = class {
  constructor(val) {
    this.lVal = val
  }
}

const n = new Add(10)
console.log(n) // { lVal: 10 };
```

## The extends keyword

```js
const Add = class {
  constructor(val) {
    this.lVal = val
  }
}

class Add2 extends Add {
  constructor(lVal, rVal) {
    super(lVal)
    this.rVal = rVal
  }
}

const n2 = new Add2(10, 20)
console.log(n2) // { lVal: 10, rVal: 20 }
```

&nbsp;
