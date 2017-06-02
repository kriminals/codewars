/*
 * Write a function done_or_not passing a board (list[list_lines]) as parameter. 
 * If the board is valid return 'Finished!', otherwise return 'Try again!
 */
function doneOrNot(board){
	var transposedArray = function(board) {
		var newArray = [];
		for (var k=0; k<9;k++){newArray.push([])};
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				newArray[i][j] = board[j][i];
			}
		}
		return newArray;
	}
	var ta = transposedArray(board);
	var regionArray = function(board) {
		var newArray = [];
		for (var k=0; k<9;k++){newArray.push([])};
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 3; j++) {
				newArray[i] = newArray[i].
					concat(board[Math.floor(i/3)*3 + j].slice(Math.floor(i/3)*3, Math.floor(i/3)*3 + 3));
			}
		}
		return newArray;
	}
	var ra = regionArray(board);

	return   (board.every(subArray => hasDuplicate(subArray))) &&
		ta.every(subArray => hasDuplicate(subArray))  &&
		( ra.every(subArray => hasDuplicate(subArray)) )?'Finished!':'Try again!';
}

function hasDuplicate(array) {
	return array.every((element, fromIndex, array) => array.indexOf(element, fromIndex + 1) == -1);
}

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]);
