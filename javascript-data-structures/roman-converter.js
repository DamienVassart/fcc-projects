/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

MeDiCaL XaVIer => 1000 | 500 | 100 | 50  ||  10 | 5 | 1 
https://www.mathsisfun.com/roman-numerals.html
*/

function convertToRoman(num) {
	
	if (![...Array(4999).keys()].map(e => e+1).includes(num)) return 'Please enter a number between 1 and 4999';

	var romanMap = {
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

	var divisors = [1000, 500, 100, 50, 10, 5, 1];

	var [thousands, fiveHundreds, hundreds, fifties, tens, fives, ones] = divisors.reduce((res, val, i, arr) => res.concat((num % arr[i] - num % arr[i+1]), [num - num % 1000]);

	return 'M'.repeat(thousands / 1000)
	 + (romanMap.hasOwnProperty(fiveHundreds + hundreds) ? romanMap[fiveHundreds + hundreds] : 'D'.repeat(fiveHundreds / 500) + 'C'.repeat(hundreds / 100))
	 + (romanMap.hasOwnProperty(fifties + tens) ? romanMap[fifties + tens] : 'L'.repeat(fifties / 50) + 'X'.repeat(tens / 10)) 
	 + (romanMap.hasOwnProperty(fives + ones) ? romanMap[fives + ones] : 'V'.repeat(fives / 5) + 'I'.repeat(ones));
}
