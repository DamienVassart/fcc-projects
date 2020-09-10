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

	var split = (num + '').padStart(4, '0').split('').reverse().map((e, i) => +e * 10**i).reverse();

	var breakDown = [(num - num % 1000) / 1000];

	for (let i = 1; i < divisors.length; i++) {
		breakDown.push((num % divisors[i - 1] - num % divisors[i]) / divisors[i]);
	}

	var thousands = romanMap[1000].repeat(split[0] / 1000);
	var hundreds = romanMap.hasOwnProperty(split[1]) ? romanMap[split[1]] : [romanMap[500].repeat(breakDown[1]), romanMap[100].repeat(breakDown[2])].join('');
	var tens = romanMap.hasOwnProperty(split[2]) ? romanMap[split[2]] : [romanMap[50].repeat(breakDown[3]), romanMap[10].repeat(breakDown[4])].join('');
	var units = romanMap.hasOwnProperty(split[3]) ? romanMap[split[3]] : [romanMap[5].repeat(breakDown[5]), romanMap[1].repeat(breakDown[6])].join('');

	return thousands + hundreds + tens + units;
	
}
