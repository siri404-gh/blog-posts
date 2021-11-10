## Component

### Without custom hook

```js
const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return <button onClick={increment}>{count}</button>
}
```

### With custom hook

```js
const useReducer = reducer => {
  const [state, setState] = useState(0)
  const dispatch = action => setState(reducer(action, state))
  return [state, dispatch]
}

const reducer = ({ type }, initialState) => {
  switch (type) {
    case 'ADD':
      return initialState + 1
    default:
      return initialState
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer)
  return <button onClick={() => dispatch({ type: 'ADD' })}>{count}</button>
}
```
