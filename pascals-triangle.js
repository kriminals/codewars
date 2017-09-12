/*
* Write a function that, given a depth (n), returns a single-dimensional array 
* representing Pascal's Triangle to the n-th level.
*/
function pascalsTriangle(n) {
  var pascalsArray = [[0,1,0]];
  for (let i = 1; i < n ; i++) {
    pascalsArray[i] = [];
    for (let j = 0; j <= i + 2; j++) {
      if (j == 0 || j == i + 2) {
        pascalsArray[i][j] = 0;
        continue;
      }
      pascalsArray[i][j] = pascalsArray[i-1][j-1] + pascalsArray[i-1][j] 
    }
  }
  var finalArray = [];
  pascalsArray.forEach(x => finalArray = finalArray.concat(x));
  return finalArray.filter(x => x !== 0); //Remove 0s
}
