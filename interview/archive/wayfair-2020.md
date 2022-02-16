# Wayfair 2020

&nbsp;

## Problem

We have a two-dimensional board game involving snakes. The board has two types
of squares on it: +'s represent impassable squares where snakes cannot go, and
0's represent squares through which snakes can move. Snakes may move in any of
four directions - up, down, left, or right - one square at a time, but they will
never return to a square that they've already visited. If a snake enters the
board on an edge square, we want to catch it at a different exit square on the
board's edge. The snake is familiar with the board and will take the route to
the nearest reachable exit, in terms of the number of squares it has to move
through to get there.

board_1's layout looks like this, for example:

```
    col-->        0  1  2  3  4  5  6  7  8
               +---------------------------
    row      0 |  +  +  +  +  +  +  +  0  0
     |       1 |  +  +  0  0  0  0  0  +  +
     |       2 |  0  0  0  0  0  +  +  0  +
     v       3 |  +  +  0  +  +  +  +  0  0
             4 |  +  +  0  0  0  0  0  0  +
             5 |  +  +  0  +  +  0  +  0  +
```

Write a function that takes a rectangular board with only +'s and O's, along
with a starting point on the edge of the board, and returns the coordinates of
the nearest exit to which it can travel. If there is a tie, return any of the
nearest exits.

n = # of rows m = # of columns


Leetcode - [1926. Nearest Exit from Entrance in Maze](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/)

&nbsp;
## Solution

```js
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

const dfs = (grid, i , j, count, map) => {
  if (i < 0 || j < 0 || j === grid[0].length || i === grid.length || grid[i][j] === '+') return;
  
  console.log(i, j, count)
  if (i === 0 || j === 0 || i === grid.length - 1 || j === grid[0].length - 1) {
    if (!map.count) map.count = count
		else map.count = Math.min(map.count, count);
	}
  
	grid[i][j] = '+';
  
	dfs(grid,i-1,j,count+1,map)
  dfs(grid,i+1,j,count+1,map)
  dfs(grid,i,j-1,count+1,map)
  dfs(grid,i,j+1,count+1,map)
};

var nearestExit = function(maze, entrance) {
	const map = { count: 0 };
	dfs(maze, entrance[0], entrance[1], 0, map);
  console.log(map)
  return map.count || - 1
};
```