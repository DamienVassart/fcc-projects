/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	var [min, max] = [Math.min(...arr), Math.max(...arr)];
	var fullRange = [...Array(max - min + 1).keys()].map((_, i) => i + min).reverse();

	const gcd = (a, b) => {
		return b === 0 ? a : gcd(b, a % b);
	}

  	return fullRange.reduce((acc, curr, i, fullRange) => (acc * fullRange[i]) / gcd(acc, fullRange[i]) , fullRange[0]);
}
