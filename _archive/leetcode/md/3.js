// Longest substring Without Repeating Characters

var lengthOfLongestSubstring = function (s) {
  let l = 0
  let r = 0
  let map = {}
  let max = 0

  while (r < s.length) {
    const lChar = s[l],
      rChar = s[r]
    if (rChar in map) {
      delete map[lChar]
      l++
    } else {
      map[rChar] = r
      max = Math.max(max, Object.keys(map).length)
      r++
    }
  }

  return max
}
