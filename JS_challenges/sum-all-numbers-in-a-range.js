/* Given an array with two numbers, return the sum of all values between ans including these numbers. The values may not always appear in ascending order */

function sumAll(arr) {
  let diff = arr.sort((x, y) => x - y).reduce((s, c) => c - s);
  return [...Array(diff + 1)].map((_, i) => i + arr[0]).reduce((s, c) => s + c);
}
