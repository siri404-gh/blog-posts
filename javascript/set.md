# Set

```js

const MySet2 = class {
    constructor() {
      this.storage = [];
    }
  
    has(num) {
      return this.storage.includes(num);
    }
  
    add(num) {
      return !this.has(num) && this.storage.push(num);
    }
  
    index(num) {
      return this.storage.indexOf(num);
    }
  
    remove(num) {
      this.has(num) && this.storage.splice(this.index(num), 1);
    }
  
    values() {
      return this.storage;
    }
  
    size() {
      return this.storage.length;
    }
  
    union(otherSet) {
      let unionSet = new MySet2();
      this.values().forEach(value => {
        unionSet.add(value);
      });
      otherSet.values().forEach(value => {
        unionSet.add(value);
      });
      return unionSet;
    }
  
    intersection(otherSet) {
      let intersectionSet = new MySet2();
      this.values().forEach(value => {
        otherSet.has(value) && intersectionSet.add(value);
      });
      return intersectionSet;
    }
  
    difference(otherSet) {
      let differenceSet = new MySet2();
      this.values().forEach(value => {
        if (!otherSet.has(value)) differenceSet.add(value);
      });
      return differenceSet;
    }
  
    subset(otherSet) {
      return otherSet.values().every(value => this.has(value));
    }
  };
  
  console.log("========SET========");
  
  const mySet = new MySet2();
  const myOtherSet = new MySet2();
  mySet.add(1);
  mySet.add(2);
  mySet.add(3);
  mySet.add(5);
  mySet.add(1);
  mySet.remove(3);
  
  myOtherSet.add(1);
  myOtherSet.add(2);
  myOtherSet.add(3);
  myOtherSet.add(4);
  myOtherSet.add(1);
  myOtherSet.remove(3);
  
  console.log(mySet.values());
  console.log(myOtherSet.values());
  console.log(mySet.union(myOtherSet).values());
  console.log(mySet.intersection(myOtherSet).values());
  console.log(mySet.difference(myOtherSet).values());
  console.log(mySet.subset(myOtherSet));
```