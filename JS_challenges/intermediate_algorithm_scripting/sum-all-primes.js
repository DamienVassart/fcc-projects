/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  var primeNums = [...Array(num + 1).keys()].filter(n => {
  	for (let i = 2; i < n; i++) {
  		if (n % i === 0) return false;
  	}
  	return n > 1;
  });
  return primeNums.reduce((acc, curr) => acc + curr);
}
