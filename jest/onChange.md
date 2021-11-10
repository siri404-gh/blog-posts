## Component

```ts
import React, { FunctionComponent, useState } from 'react'

const Index: FunctionComponent = () => {
  const [val, setVal] = useState('')

  const onInputChange = e => {
    e.preventDefault()
    setVal(e.target.value)
  }

  return (
    <div>
      <input type='text' onChange={onInputChange} value={val} />
    </div>
  )
}
```

## Test

```js
it('Should set value to state when input is changed', () => {
  const container = shallow(<Index />)
  const input = container.find('input')
  input.simulate('change', {
    preventDefault: jest.fn,
    target: { value: 'foo' },
  })
  expect(container).toMatchSnapshot()
})
```
