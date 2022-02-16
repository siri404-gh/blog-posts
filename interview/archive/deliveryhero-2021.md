# Delivery Hero 2021

&nbsp;

## Problem

Write a function parallelBy that accepts 2 parameters - an array of async functions*, an integer as limit and returns a promise. The function will execute all the given async functions in parallel but never execute more than the given limit at any point in time. So as more async tasks get resolved, other async tasks waiting in line will start executing. The result promise will resolve with an array of values containing resolve values of the given async functions in order, like Promise.all does. And the result promise will reject as soon as one of the async functions fails, with the rejection value of that async function, again like Promise.all does.

*: async function means any function that returns a promise

&nbsp;

## Solution

```js
const parallelBy = (arr, limit) => {
  return new Promise((resolve, reject) => {
  })
}
```