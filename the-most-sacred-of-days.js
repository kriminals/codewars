/*
 * Create a blackFriday function which accepts an integer year,
 *   and returns the day of the month of November that Black Friday
 * falls on in that year
 */
function blackFriday(year) {
  var nov1 = new Date('November 1, ' + year);
  var daynov1 = nov1.getDay();
  return daynov1 < 5 ? 6 - daynov1 + 21: 8 - daynov1 + 5 + 21;
}
