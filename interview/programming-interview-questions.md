# Programming Interview questions

&nbsp;

## 1. Klarna 2019

Implement the Reverse Polish Notation of numbers.

## 2. Zalando 2020

Write a function that returns N unique integers that sum up to 0.

## 3. Wayfair 2020

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

## 4. Wayfair 2020

We are writing a tool to help users manage their calendars. Given an unordered
list of times of day when someone is busy, write a function that tells us
whether they're available during a specified period of time.

Each time is expressed as an integer using 24-hour notation, such as 1200
(12:00), 1530 (15:30), or 800 (8:00).

Sample input:

meetings = [ [1230, 1300], [845, 900], [1300, 1500] ]

Expected output:

```shell
isAvailable(meetings, 915, 1215)   => true
isAvailable(meetings, 900, 1230)   => true
isAvailable(meetings, 850, 1240)   => false
isAvailable(meetings, 1200, 1300)  => false
isAvailable(meetings, 700, 1600)   => false
isAvailable(meetings, 800, 845)    => true
isAvailable(meetings, 1500, 1800)  => true
isAvailable(meetings, 845, 859)    => false
isAvailable(meetings, 846, 900)    => false
isAvailable(meetings, 846, 859)    => false
isAvailable(meetings, 2359, 2400)  => true
isAvailable(meetings, 930, 1600)   => false
isAvailable(meetings, 800, 850)    => false
isAvailable(meetings, 1400, 1600)  => false
isAvailable(meetings, 1300, 1501)  => false
```

n = number of meetings m = minutes in range of meetings

## 5. Delivery Hero 2021

Implement a function to check if a word is a palindrome or not.

## 6. Bloomberg 2021

Implement a simple browser history datastructure.

## 7. Aize 2021

Design and implement an algorithm which sorts a list of strings of words and
numbers while keeping the element types in place.

## 8. Bolt 2021

Write a function checking that the given string is valid. We consider a string
to be valid if all the characters of the string have exactly the same frequency.

Check if the string is valid as it is (same condition as before) or if one
character at one position can be removed from the string so it will become
valid.

## 9. Rain 2021

Write a function to shuffle a deck of cards.

## 10. Causalens 2021

Write a program to determine the next new folder name.

&nbsp;
