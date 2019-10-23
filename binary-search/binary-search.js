"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1) {
    if (target === array[0]) {
      return true;
    } else {
      return false;
    }
  }
  let midpointIndex = Math.floor(array.length / 2);
  let midpointValue = array[midpointIndex];

  if (midpointValue === target) {
    return true;
  } else if (target < midpointValue) {
    let firstHalf = array.slice(0, midpointIndex);
    return binarySearch(firstHalf, target);
  } else {
    let secondHalf = array.slice(midpointIndex, array.length);
    return binarySearch(secondHalf, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
