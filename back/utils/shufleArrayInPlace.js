/**
 * It picks a random element for each original array element, 
 * and excludes it from the next draw.
 * 
 * The shuffle is done in-place so if you don't want to modify
 * the original array, first make a copy of it. 
 * 
 * The time complexity is O(n) and space O(1). 
 * @param {*} array 
 */


const shufleArrayInPlace = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }


}

module.exports = shufleArrayInPlace;

//Credits: https://stackoverflow.com/a/12646864