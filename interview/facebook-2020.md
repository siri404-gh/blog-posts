# Facebook 2020

&nbsp;

## Problem

Implement an emitter class in Javascript

&nbsp;
## Solution

```js
const Emitter = class {
  constructor() {
    this.events = {}
  }

  on(...args) {
    const msg = args.shift()
    this.events[msg] = (this.events[msg] || []).concat(...args)
  }

  emit(...args) {
    const msg = args.shift()
    this.events[msg]?.forEach(event => event(...args))
  }

  remove(...args) {
    const msg = args.shift()
		if (msg in this.events) {
			this.events[msg] = this.events[msg].filter(event => {
				return args.indexOf(event) === -1
			})
		}
  }
}

var em = new Emitter()

const cb1 = () => console.log(1)
const cb2 = () => console.log(2)
const cb3 = () => console.log(3)

em.on('msg', cb1)
em.on('msg2', cb2)
em.on('msg', cb3)
em.emit('msg', 5) // 1 3
em.remove('msg', cb1)
em.emit('msg') // 3
```
