# Promise

```js
const fakeUser = {
  name: 'Sreeram Padmanabhan',
  age: '32',
  address: '123, Charming Avenue',
}

const fetch = url =>
  new Promise((resolve, reject) => {
    resolve({
      json: () =>
        new Promise((resolve, reject) => {
          resolve(fakeUser)
        }),
    })
  })
```

### Shorter version

```js
const fetch = url =>
  Promise.resolve({
    json: () => Promise.resolve(fakeUser),
  })
```

### Usage

```js
async(() => {
  const res = await fetch()
  console.log(await res.json())
})()
```

&nbsp;
