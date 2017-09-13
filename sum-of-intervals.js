/*
* Write a function called sumIntervals/sum_intervals() 
* that accepts an array of intervals,
* and returns the sum of all the interval lengths. 
* Overlapping intervals should only be counted once.
*/

function sumIntervals(intervals){
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);
  var maxValue = 0;
  return intervals.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentValue[1]>maxValue) {
      maxValue = currentValue[1];
      return (currentIndex == 0 || currentValue[0] >= array[currentIndex-1][1]) ? 
      accumulator + currentValue[1] - currentValue[0] : 
      (currentValue[1] - array[currentIndex-1][1] > 0) ? 
      accumulator + currentValue[1] - array[currentIndex-1][1] : accumulator; 
    }
    return accumulator;
  },0 );
}