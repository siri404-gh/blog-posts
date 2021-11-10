# Javascript Interview questions

#### 16 Oct 2021, London

&nbsp;

## General Topics

You can expect these general questions in the initial rounds of a Mid
senior/senior role.

- Datatypes
- Scope
- Hoisting
- Closures
- Context
- Prototype chain
- Event loop
- Event propagation
- Asynchronousity in Javascript
- Iterators and Generators

&nbsp;

## Programming topics

For a senior role, its important to be able to use the tools Javascript provides
to write implementations of regularly used methods. Given below are not the most
commonly asked questions. Although these implementations are not perfect, they
have worked for me in interviews.

### Array.prototype.filter

```js
Array.prototype.filter = function (...args) {
  var result = []
  var fn = args[0]

  this.forEach(item => {
    if (fn(item)) result.push(item)
  })

  return result
}
```

&nbsp;

### Array.prototype.map

```js
Array.prototype.map = function (...args) {
  let result = []
  var mapper = args[0]
  this.forEach(item => {
    result.push(mapper(item))
  })

  return result
}
```

&nbsp;

### Array.prototype.reduce

```js
Array.prototype.reduce = function (...args) {
  var [reducer, initialVal] = args
  let result = initialVal

  this.forEach(item => {
    result = reducer(result, item)
  })

  return result
}
```

&nbsp;

### Array.prototype.flat

```js
Array.prototype.flat = function () {
  let result = []

  ;(function () {
    this.forEach(item => {
      if (item.length) arguments.callee.call(item)
      else result.push(item)
    })
  }.call(this))

  return result
}
```

&nbsp;

### Function.prototype.call

```js
Function.prototype.call = function (...args) {
  var obj = args.shift()
  var key = Math.random()
  obj[key] = this
  var result = obj[key](...args)
  delete obj[key]
  return result
}
```

&nbsp;

### Function.prototype.apply

```js
Function.prototype.apply = function (...args) {
  var obj = args.shift()
  var key = Math.random()
  obj[key] = this
  var result = obj[key](...args[0])
  delete obj[key]
  return result
}
```

&nbsp;

### Function.prototype.bind

```js
Function.prototype.bind = function (...args) {
  var obj = args.shift()
  var key = Math.random()
  obj[key] = this

  return function (...args2) {
    return obj[key](...[...args, ...args2])
  }
}
```

&nbsp;

### Function.prototype.debounce

```js
Function.prototype.debounce = function (...args) {
  var fn = this
  var [duration] = args
  let timer

  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn.bind(null, ...args), duration)
  }
}
```

&nbsp;

### Function.prototype.throttle

```js
Function.prototype.throttle = function (...args) {
  let time = 0
  let [duration] = args
  return function (...args) {
    const currentTime = new Date().getTime()
    if (currentTime - time < duration) return
    time = currentTime
    this(...args)
  }.bind(this)
}
```

&nbsp;

### Emitter class

```js
class Emitter {
  constructor() {
    this.events = {}
  }

  on(...args) {
    var message = args.shift()
    if (message in this.events) this.events[message].push(...args)
    else this.events[message] = args
  }

  emit(...args) {
    var message = args.shift()
    if (message in this.events) {
      this.events[message].forEach(event => {
        event(...args)
      })
    }
  }

  remove(...args) {
    var message = args.shift()
    if (message in this.events) {
      this.events[message] = this.events[message].filter(event => {
        return !args.includes(event)
      })
    }
  }
}
```

&nbsp;

### Redux class

```js
class Redux {
  constructor(reducer) {
    this.state = null
    this.views = []
    this.reducer = reducer
  }

  subscribe(...args) {
    this.views.push(...args)
  }

  dispatch(...args) {
    var [action] = args
    this.state = this.reducer(this.state, action)
    this.views.forEach(view => view())
  }

  getState() {
    return this.state
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case '+':
      return ++state
    case '-':
      return --state
    default:
      return state
  }
}
```

&nbsp;

### The Incrementor puzzle

```js
/*
  Read the test first.
  Your goal is to make it output like given in the test.
*/

// Your solution goes here --

var Increment = function () {
  this.val = 0

  this.toString = function () {
    return this.val++
  }

  return this.val
}

// The test

let increment = new Increment()
let increment2 = Increment()

console.log(increment == increment2) // true
console.log(`val: ${increment}`) // val: 1
console.log(`val: ${increment}`) // val: 2
console.log(`val: ${increment}`) // val: 3
```

&nbsp;
