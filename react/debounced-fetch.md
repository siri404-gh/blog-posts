## Debounced fetch in React

```js
import React, { useState, useCallback } from 'react'
import lodash from 'lodash'

const DEBOUNCE_DELAY = 500

const mockFetch = url =>
  new Promise((resolve, reject) => {
    resolve({
      json: () => new Promise(resolve => resolve(Math.random())),
    })
  })

export default function DebouncedFetch() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)

  const fetchResults = async query => {
    const response = await mockFetch('#')
    const data = await response.json()
    setData(data)
  }

  const debouncedFetch = useCallback(
    lodash.debounce(fetchResults, DEBOUNCE_DELAY),
    [],
  )

  const onInputChange = e => {
    e.preventDefault()
    const value = e.target.value
    setQuery(value)
    debouncedFetch(value)
  }

  return (
    <>
      <input type='text' value={query} onChange={onInputChange} />
      {data}
    </>
  )
}
```
