const Url = class {
  constructor(str) {
    this.url = str
    this.next = null
    this.prev = null
  }
}

/**
 * @param {string} homepage
 */
const BrowserHistory = class {
  constructor(homepage) {
    this.root = new Url(homepage)
    this.current = this.root
  }
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.current.next = new Url(url)
  const prev = this.current
  this.current = this.current.next
  this.current.prev = prev
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let i = 0
  while (i++ < steps && this.current.prev) {
    this.current = this.current.prev
  }
  return this.current.url
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let i = 0
  while (i++ < steps && this.current.next) {
    this.current = this.current.next
  }
  return this.current.url
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
