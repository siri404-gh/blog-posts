# Lets look at callback hells and promisification

## Summary

This one is a toughie. Took me a long while to wrap my head around it. And it is one of the most important concepts in Javascript.

## Callback hell

Lets say we have a function which resolves at a later time, sometime in the future, something like a network call, something like a setTimeout. 
Lets use setTimeout for this example. Lets write a function called multiplier and lets simulate it to resolve after 1 second using setTimeout.
Once the result is available, it will call a callback with an error or the result. Lets assume you get this function from a library and you dont have control
over it. This is important. You cant change this function.

```js
const multiplier = (num, callback) => {
  setTimeout(() => {
    if (!num) return callback("there was an error")
    return callback(undefined, arg1*2)
  }, 1000) 
}
```

Now, how would we use this function? We would write something like this:

```js
multiplier(1, (err, data) => {
  if (err) console.error(err)
  else console.log(data)
});
```

Now, lets think of a scenario where we need to do something with the value. Lets say we need to add 100 to it. Lets assume this is asynchronous too,
meaning it takes time to resolve. Lets simulate this 'taking time' with a setTimeout. Keep in mind that this is also a function that comes from a library
and that you dont have control over it.

```js
const adder = (num, callback) => {
  setTimeout(() => {
    if (!num) return callback("there was an error")
    return callback(undefined, arg1 + 100)
  }, 1000)
}
```

Now, how would we use this function in cunjunction with the multiplier function?

```js
multipler(1, (err, data) => {
  if (error) console.error(error)
  else {
    adder(data, (err, data) => {
      if (err) console.error(err)
      else console.log(data)
    });
  }
});
```

Do you notice the code nesting and indending deeper and deeper? Its called the pyramid of doom or the callback hell. As the number of callbacks increase,
the code becomes unreadable very quickly. This is where promises come to play. Promises essentially let you write this code in a synchronous way.
The actual execution is still asynchronous, but the code looks much nicer. How nicer would it be able to write something like:

```js
multiplier(1)
  .then(adder)
  .then(console.log)
  .catch(console.error)
```

We can achieve this using Promises.


```js
multiplierPromise(1)
  .then(adderPromise)
  .then(console.log)
  .catch(console.error)
```

## Promisify

To be able to use the then and catch methods on a function, we have to wrap them in a promise. Lets do that first.

```js
const multiplerPromise = num => {
  return new Promise((resolve, reject) => {
    multiplier(num, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    });
  })
}

const adderPromise = num => {
  return new Promise((resolve, reject) => {
    adder(num, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    });
  })
}
```

So basically we just wrapped our usage of the multipler and adder functions from the library inside a promise. This lets us write the code in a synchronous way.

But we cant keep wrapping all such functions inside a promise.
So lets write a generic function which will do this wrapping for us.


```js
const promisify = fn => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) return reject(err)
        return resolve(data)
      });
    });
  }
}
```

Now, you can write the following.

```js
const [ multiplerPromise, adderPromise ] = [ promisify(multiplier), promisify(adder) ]

multiplerPromise(1)
  .then(adderPromise)
  .then(console.log)
  .error(console.error)
```

This can be a bit hard to wrap your head around. But once you grasp it, you will see the beauty in it.

&nbsp;
