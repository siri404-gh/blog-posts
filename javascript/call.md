# Implement call in javascript

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

&nbsp;
