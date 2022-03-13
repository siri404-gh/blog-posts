/**
Build a cache data structure which implements the following eviction policy:

1) evict an expired item if it exists
2) otherwise evict the Least Recently Used item among the ones of the lowest priority.
*/

/*
C = new Cache(5)
// C.Set(key="A", value=5,  priority=5, expiration=10001)
// C.Set(key="B", value=4,  priority=1, expiration=40006)
C.Set(key="C", value=3,  priority=5, expiration=10001)
// C.Set(key="D", value=2,  priority=9, expiration=  500)
// C.Set(key="E", value=1,  priority=5, expiration=10004)
C.Get("C")


// Current Time = 900   system.get_current_time()

C.Set(key="F", value=10, priority=5, expiration= 5001)
C.Set(key="G", value=9,  priority=5, expiration= 5004)
C.Set(key="H", value=-1, priority=5, expiration= 5009)
C.Set(key="I", value=1,  priority=5, expiration= 5011)

C.Set(key="C", value=1,  priority=5, expiration= 5021)
*/

interface CacheItem {
  string key
  int value
  int priority
  int expiration
}

const LRUCache = class {
  constructor(size) {
    this.size = size
    this.data = {}
    this.totalSize = 0
  }
  
  getItemToBeDeleted() {
    if (heap.peek.expiration < system.current_time) {
      // evit heap.poll
    } else {
      
    }
  }

  set(obj) {
    const { key, value, priority, expiration } = obj

    if (this.totalSize === size) {
      const { key } = this.getItemToBeDeleted()
      delete this.data[key]
    }

    this.data[key] = obj
  }

  
}