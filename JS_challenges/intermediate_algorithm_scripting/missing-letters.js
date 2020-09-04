/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
  var strCharCodes = [...str].map(l => l.charCodeAt(0));
  var start = str.charCodeAt(0);
  var end = str.charCodeAt(str.length - 1);
  var fullRange = [...new Array(end - start + 1).keys()].map((_, i) => i + start);
  var diff = fullRange.filter(n => strCharCodes.indexOf(n) === -1);
  
  return diff.length == 0 ? undefined : diff.map(l => String.fromCharCode(l)).join('');
}
