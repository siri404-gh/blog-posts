# Sorting Algorithms

## Bubble Sort

```js
const bubbleSort = arr => {
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
};

console.log(bubbleSort([5, 4, 3, 2, 1]))
```
