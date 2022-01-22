# Call, Apply, Bind in Javascript

## Call

```js
Function.prototype.myCall = function(obj, ...args) {
  obj[(key = Math.random())] = this
  return obj[key](...args)
}

const greet = function(greeting, additionalGreeting) {
  return `${greeting}${additionalGreeting ?? ''}, ${this.firstName} ${this.lastName}!`
}

const obj = { firstName: 'Sreeram', lastName: 'Padmanabhan' }

console.log(greet.call(obj, 'Hello', ' World')) // "Hello World, Sreeram Padmanabhan!"
console.log(greet.myCall(obj, 'Hello', ' World')) // "Hello World, Sreeram Padmanabhan!"

```

## Apply

```js
Function.prototype.myApply = function(obj, args) {
  obj[(key = Math.random())] = this

  return obj[key](...args)
}

const greet = function(greeting, additionalGreeting) {
  return `${greeting} ${additionalGreeting ?? ''}, ${this.firstName} ${this.lastName}!`
}

const obj = { firstName: 'Sreeram', lastName: 'Padmanabhan' }

console.log(greet.apply(obj, ['Hello', 'World'])) //"Hello World, Sreeram Padmanabhan!"
console.log(greet.myApply(obj, ['Hello', 'World'])) // "Hello World, Sreeram Padmanabhan!"
```

## Bind

```js
Function.prototype.myBind = function(obj, ...args1) {
  obj[(key = Math.random())] = this

  return function(...args2) {
    return obj[key](...args1, ...args2)
  }
}

const greet = function(greeting, additionalGreeting) {
  return `${greeting} ${additionalGreeting ?? ''}, ${this.firstName} ${this.lastName}!`
}

const obj = { firstName: 'Sreeram', lastName: 'Padmanabhan' }

console.log(greet.bind(obj, 'Hello')('World')) // Hello World, Sreeram Padmanabhan
console.log(greet.bind(obj)('Hello', 'World')) // Hello, Sreeram Padmanabhan
console.log(greet.myBind(obj, 'Hello')('World')) // Hello, Sreeram Padmanabhan
console.log(greet.myBind(obj)('Hello', 'World')) // Hello, Sreeram Padmanabhan
```

&nbsp;
