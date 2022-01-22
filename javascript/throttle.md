# Implement throttling in Javascript

```js
// Execute once every given duration. For eg, firing network calls

const throttle = function (fn, duration) {
  let time = 0
  return (...args) => {
    const currentTime = new Date().getTime()
    if (currentTime - time < duration) return
    time = currentTime
    fn(...args)
  }
}

const sleep = time =>
  new Promise((resolve, reject) => setTimeout(resolve, time))

const throttledLog = console.log.throttle(1000)

;(async () => {
  throttledLog(1) // 1
  throttledLog(2)
  throttledLog(3)
  throttledLog(4)
  await sleep(1000)
  throttledLog(5) // 5
  throttledLog(6)
  throttledLog(7)
  throttledLog(8)
  await sleep(1000)
  throttledLog(9) // 9
  throttledLog(10)
  throttledLog(11)
  throttledLog(12)
})()


```

&nbsp;
