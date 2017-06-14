/*
 * The maximum sum subarray problem consists in finding the maximum sum 
 * of a contiguous subsequence in an array or list of integers:
 */
var maxSequence = function(arr) {
  var maxSum = 0;
  var sum = function(arr) {
    if (arr.length === 0) return maxSum; 
    arr.reduce((sum, current) => {
      sum += current;
      maxSum =  Math.max(sum, maxSum);
      return sum;
    }, 0);
  arr.splice(0, 1);
  return sum(arr);
  }
  return sum(arr);
}
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
