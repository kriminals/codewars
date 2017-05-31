/*
 * Write an algorithm that takes an array and moves all of the zeros
 * to the end, preserving the order of the other elements.
 */
function moveZeros(arr) {
	var i = 0;
  var count = 0;
  var zeros =[];
  var start = i => arr.indexOf(0,i);
	while (start(i) !== -1) {
		zeros.push(arr.splice(start(i), 1)[0]);
		count++;
		i = start(i);
	}
  return arr.concat(zeros);
}
moveZeros([1,2,0,1,0,1,0,3,0,1]);
