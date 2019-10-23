"use strict";

// Complete this algo
const binarySearch = (
  array,
  target,
  start = 0,
  end = array.length - 1,
  direction = "left"
) => {
  // if (array.length === 1) {
  //   if (target === array[0]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  if (end - start === 1) {
    return false;
  }
  let midpointIndex;
  if (direction === "left") {
    midpointIndex = Math.floor((start + end) / 2);
  } else {
    midpointIndex = Math.ceil((start + end) / 2);
  }

  let midpointValue = array[midpointIndex];

  if (midpointValue === target) {
    return true;
  }

  if (target < midpointValue) {
    // let firstHalf = array.slice(0, midpointIndex);
    direction = "left";
    return binarySearch(array, target, start, midpointIndex);
  } else {
    // let secondHalf = array.slice(midpointIndex, array.length);
    direction = "right";
    return binarySearch(array, target, midpointIndex, end);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
