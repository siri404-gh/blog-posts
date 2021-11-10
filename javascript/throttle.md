# Debounce in Javascript

```js
const throttle = function (fn, duration) {
  let time = 0
  return (...args) => {
    const currentTime = new Date().getTime()
    if (currentTime - time < duration) return
    time = currentTime
    fn(...args)
  }
}
```

&nbsp;
