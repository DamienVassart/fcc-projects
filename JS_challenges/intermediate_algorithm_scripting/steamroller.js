/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  var res = [].concat(...arr);
  return res.some(Array.isArray) ? steamrollArray(res) : res;
}
