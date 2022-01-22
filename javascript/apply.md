# Implement apply in javascript

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

&nbsp;
