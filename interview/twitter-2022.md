# Twitter 2022

&nbsp;

## Problem

For a recursive description of DOM elements, write a function that prepares a actual dom elements.

```
var dom = {
  type:'div',
  props:{
    id:'hello',
    children:[{
      type:'h1',
      props: {
        children: 'HELLO',
      }
    }]
  }
}
```

&nbsp;

## Solution

```js
const create = (element, parent) => {
  if (!parent || !element) return;
  const { type, props } = element;
  const node = document.createElement(type);
  for (prop in props) {
    if (prop === "children") {
      if (Array.isArray(props.children)) {
        props.children.forEach((_props) => create(_props, node));
      } else if (typeof props.children === "string") {
        node.innerHTML = props.children;
      }
    } else node.setAttribute(prop, props[prop]);
  }
  parent.appendChild(node);
};
```
