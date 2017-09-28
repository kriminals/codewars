/* Extend the Number prototype with a function called 
 * "twos" that accepts one parameter (n), and when called, 
 * returns the two's-complement representation of the number 
 * in "n" bits in a string. 
 */
Number.prototype.twos = function (n) {
  let binaryString = this.toString(2);
  if (this >= 0) return '0'.repeat(n - binaryString.length) + binaryString;
  if (this < 0) {
    let numbertoShow = Math.pow(2,n) - Math.abs(this);
    let binaryNumberToShow = numbertoShow.toString(2);
    return '1'.repeat(n - binaryNumberToShow.length) + binaryNumberToShow;
  }
};