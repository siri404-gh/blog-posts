# Generators in Javascript

```js
// Example 1

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Example 2

class Polygon {
  constructor(...sides) {
    this.sides = sides;
  }

  *[Symbol.iterator]() {
    for (let side of this.sides) yield side;
  }
}

const shape = new Polygon(1, 2, 3, 4, 5);

for (let side of shape) {
  console.log(side);
}

// Example 3

function* idMaker() {
  let id = 0;
  while (1) yield id++;
}

const it = idMaker();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
```
