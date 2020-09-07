/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
  return str.split(' ').map(e => String.fromCharCode(parseInt(e, 2))).join('');
}