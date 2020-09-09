/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

MeDiCaL XaVIer => 1000 | 500 | 100 | 50  ||  10 | 5 | 1 
https://www.mathsisfun.com/roman-numerals.html
*/

function convertToRoman(num) {
	
	var map = {
		1000 : 'M', 
		900 : 'CM', 
		500 : 'D', 
		400 : 'CD', 
		100 : 'C', 
		90 : 'XC', 
		50 : 'L', 
		40 : 'XL', 
		10 : 'X', 
		9 : 'IX', 
		5 : 'V', 
		4 : 'IV', 
		1 : 'I'
	};

	var divisors = [1000, 500, 50, 5];
	//var res = divisors.reduce((res, val, i, arr) => res.concat(((num % arr[i - 1]) - num % arr[i]) / arr[i]) , [(num - num % 1000) / 1000]).filter(e => !isNaN(e));
	var breakDown = (num + '').padStart(4, '0').split('').reverse().map((e, i) => +e * 10**i).reverse();
	return breakDown.map((e, i) => e === 0 ? 0 : map.hasOwnProperty(e) ? map[e] : e > divisors[i] ? [map[divisors[i]], map[e % divisors[i]]].join('') : map[10**(i-1)].repeat(e % divisors[i] / 10**(i-1)));

	
}

console.log(convertToRoman(36)); // XXXVI => 10 10 10 5 1
console.log(convertToRoman(1546)); // MDXXXVI => 1000 500 10 10 10 5 1