/*
 * Given a list of integers and a single sum value, return the first two values
 * (parse from the left please) in order of appearance 
 * that add up to form the sum
 */
var sum_pairs = function (ints, s) {
	var firstIndex;
	var intsMap = new Map();
	var maxIndex = ints.length;
	var lastIndex;
	for (var i = 0; i < maxIndex; i++) {
		firstIndex = intsMap.get(s-ints[i]); 
		if (firstIndex !== undefined && firstIndex < i) { 
			maxIndex = i;
			lastIndex = i;
		}
		intsMap.set(ints[i], i);
	}
	return firstIndex === undefined? undefined: [ints[firstIndex],ints[lastIndex]];
};

l3= [20, -13, 40];
sum_pairs(l3, -7);
l1= [1, 4, 8, 7, 3, 15];
sum_pairs(l1, 8);
