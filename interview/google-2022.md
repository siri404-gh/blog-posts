# Google 2022

&nbsp;

## Problem

Implement an emitter class in Javascript

&nbsp;

## Solution

```js
const Emitter = class {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    this.events[eventName] = callback;
    const that = this;
    return {
      release: function () {
        delete that.events[eventName];
      },
    };
  }

  emit(eventName, ...args) {
    this.events[eventName]?.(...args);
  }
};

const emitter = new Emitter();

const cb1 = () => console.log(1)
const cb2 = () => console.log(2)
const cb3 = () => console.log(3)

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', cb1);
sub2 = emitter.subscribe('event_name2', cb2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', 'foo', 'bar');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

emitter.emit('event_name', 'foo', 'bar');
```
