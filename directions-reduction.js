/*
 * Write a function dirReduc which will take an array of strings and returns an
 * array of strings with the needless directions removed 
 * (W<->E or S<->N side by side)
 */
function dirReduc(arr) {
  var vainDir = ["NORTHSOUTH","SOUTHNORTH", "EASTWEST", "WESTEAST"];
  for (var index = 0; index < arr.length -1; index++) {
    if (vainDir.indexOf(arr[index] + arr[index+1]) != -1) 
    {
      arr.splice(index, 2);
      index = -1;
    }
  }
  return arr;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
