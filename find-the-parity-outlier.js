/*
 *You are given an array (which will have a length of at least 3, but could be
 *very large) containing integers. The array is either entirely comprised
 *of odd integers or entirely comprised of even integers except for a single
 *integer N. Write a method that takes the array as an argument and returns N.
 */
function findOutlier(integers){
	var evenElements = 0;
	for (var i = 0; i < 3;i++) {
		if ( isEven(integer[i]) ) evenElements++;	
	}
	return evenElements > 1? integers.find(currentValue => !isEven(currentValue)): integers.find(currentValue => isEven(currentValue));
}

function isEven(integer) {
	return !(integer % 2);
}
