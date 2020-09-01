/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note:
You can return the array with its elements in any order. */

function diffArray(arr1, arr2) {
  var newArr = [...arr1.concat(arr2)];
  return newArr.filter(e => !(arr1.includes(e) && arr2.includes(e)));
}
