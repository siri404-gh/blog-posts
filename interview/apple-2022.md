# Apple 2022s

&nbsp;

## Problem

Prepare a setTimeout and clearTimeout and clearAllTimeouts. Should be global and have a garbage collection system for all running timeouts on demand.

&nbsp;

## Solution

```js
let timers = {}

const myTimerFn = () => {
  const set = (cb, time) => {
    const t = setTimeout(cb, time)
    timers[t] = 1
    return t
  }

  const clear = (timer) => {
    if (timer in timers) {
      clearTimeout(timer)
      delete timers[timer]
    }
  }

  const clearAll = () => {
    Object.keys(timers).forEach(clearTimeout)
    timers = {}
  }
	
	return { set, clear, clearAll, timers }
}

window.myTimer = myTimerFn

var { set, clear, clearAll } = myTimer()


// const t1 = set(() => console.log(1), 5000)
// const t2 = set(() => console.log(2), 6000)
// const t3 = set(() => console.log(3), 7000)
// const t4 = set(() => console.log(3), 10000)
// clear(t2)

```
