// Backstory:
//  You're an engineer at Netflix, and you've been asked to calculate 
//  at what time range in the day Netflix's datacenters are serving 
//  peak bandwidth. You've been given a single days worth of video 
//  impressions in the following format:
//
// Impression:
//         {
//          startTime: timestamp,
//          endTime: timestamp,
//          bandwidth: int
//         }
//
//      Example:
//         {
//          startTime: 1581588000,
//          endTime: 1581553800,
//          bandwidth: 10
//         }
//
// Task:
//   Write a function that given an array of impressions, it'll return 
//   the *startTime*, the *endTime* and the *bandwidth* of the peak 
//   traffic in the day.
//
// Example:
//     Impression 1: 9:00 - 9:45 BW: 10
//     Impression 2: 9:15 - 9:30 BW: 5
//     Impression 3: 9:20 - 9:35 BW: 15
//     Impression 4: 9:55  BW: 40
//                   -------------------
//            Peak: 9:20 - 9:30 BW: 30

import { time } from "node:console"

/*

  9 - 945 = 10
  915 930 = 10 + 5
  920 935 = 15

  {
    9: 10
    915: 5
    920: 15 // 30
    930: -5  // 25, MaxBW: 30
    935: -15 // 10, MaxBW: 30
    945: -10
    9:55: // 40, maxBW: 40
  }
*/


function calculatePeakTraffic(impressions) {
  let result = null

  impressions = impressions
  .sort((a, b) => a.startTime - b.startTime)

  let map = {}

  impressions.forEach(impression => {
    const { startTime, endTime, bandwidth } = impression
    map[startTime] = bandwidth
    map[endTime] = -bandwidth
  })

  let newMax = 0
  let newEnd = 0
  let hasEndTimeSet = false

  for (time in map) {
    // 2 cases: 1) at max is changing or persisting, 2) you're not at max
    // 9:35: BW: 25 -> 10, MaxBW: 30
    // 1) Reached a new max -> startTime
    // Still at the new max
    // 2) Were at the max, and now you're below it -> endTime
    const newMax = Math.max(currentMax, sum(map[time], currentBW))
    if (newMax > prevMax) {
      startTime = time
      hasEndTimeSet = false
    } else {
      if (!hasEndTimeSet) {
        endTime = time
        hasEndTimeSet = true
      }
    }
  }
}
