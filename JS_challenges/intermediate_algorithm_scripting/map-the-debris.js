/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia: http://en.wikipedia.org/wiki/Orbital_period

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  var [GM, earthRadius] = [398600.4418, 6367.4447];
  return arr.map(e => {
  	return {name:e.name, orbitalPeriod:Math.round(2 * Math.PI * Math.sqrt((earthRadius + e.avgAlt)**3 / GM))}
  });
}
