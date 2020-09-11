/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

MeDiCaL XaVIer => 1000 | 500 | 100 | 50  ||  10 | 5 | 1 
https://www.mathsisfun.com/roman-numerals.html
*/

function convertToRoman(num) {
	
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

	var [units, tens, hundreds, thousands] = (num + '').padStart(4, '0').split('').reverse().map((e, i) => +e * 10**i);

	var breakDown = divisors.reduce((res, val, i, arr) => res.concat((num % arr[i-1] - num % arr[i]) / arr[i]), [(num - num % 1000) / 1000]).filter(e => !isNaN(e));

	thousands = romanMap[1000].repeat(thousands / 1000);
	hundreds = romanMap.hasOwnProperty(hundreds) ? romanMap[hundreds] : romanMap[500].repeat(breakDown[1]) + romanMap[100].repeat(breakDown[2]);
	tens = romanMap.hasOwnProperty(tens) ? romanMap[tens] : romanMap[50].repeat(breakDown[3]) + romanMap[10].repeat(breakDown[4]);
	units = romanMap.hasOwnProperty(units) ? romanMap[units] : romanMap[5].repeat(breakDown[5]) + romanMap[1].repeat(breakDown[6]);

	return thousands + hundreds + tens + units;
	
}
