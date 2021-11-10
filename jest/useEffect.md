## Component

```ts
import React, { useState, useEffect } from 'react'

export default function User() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    ;(async function fetchUserData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      )
      setUser(await response.json())
    })()
  }, [])

  if (!user) {
    return 'loading...'
  }

  return <pre>{JSON.stringify(user)}</pre>
}
```

## Test

```js
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import User from '@/source/user'

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders user data', async () => {
  const fakeUser = {
    name: 'Joni Baez',
    age: '32',
    address: '123, Charming Avenue',
  }

  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    }),
  )

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User />, container)
  })

  expect(container).toMatchSnapshot()

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockClear()
  delete global.fetch
})
```
