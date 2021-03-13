/* Write a function that will solve a 9x9 Sudoku puzzle. 
 * The function will take one argument consisting of the 2D puzzle array, 
 * with the value 0 representing an unknown square.
 * The Sudokus tested against your function will be 
 * "easy" (i.e. determinable; there will be no need to assume 
 * and test possibilities on unknowns) and can be 
 * solved with a brute-force approach. 
*/
  
var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
var emptySpace = [];

function backTrack(row, col) {
  let num = puzzle[row][col];
  do {
    num += 1;
  } while (
    checkRow(num, row, puzzle) ||
    checkColumn(num, col, puzzle) ||
    checkSquare(num, row, col, puzzle)
  );
  puzzle[row][col] = num;
  if (num === 10) {
    puzzle[row][col] = 0;
    emptySpace.pop();
    return backTrack(...emptySpace[emptySpace.length - 1]);
  }
  return emptySpace[emptySpace.length - 1];

}
function sudoku(puzzle) {
  
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        emptySpace.push([row, col]);
        let num = puzzle[row][col];
        do {
          num += 1;
        } while (
          checkRow(num, row, puzzle) ||
          checkColumn(num, col, puzzle) ||
          checkSquare(num, row, col, puzzle)
        );
        puzzle[row][col] = num;
        if (num === 10) {
          puzzle[row][col] = 0;
          emptySpace.pop();
          [row, col] = backTrack(...emptySpace[emptySpace.length - 1]);
          
        }
      }
    }
  }
 console.log(puzzle); 
  return puzzle;

  //return the solved puzzle as a 2d array of 9 x 9
}

function checkRow(num, row, puzzle) {
  return puzzle[row].includes(num);
}

function checkColumn(num, col, puzzle) {
  const column = Array.from(puzzle, (row) => row[col]);
  return column.includes(num);
}

function checkSquare(num, row, col, puzzle) {
  const array9x9 = [];
  const array9x9StartRow = row - (row % 3);
  const array9x9StartCol = col - (col % 3);
  for (let i = array9x9StartRow; i < array9x9StartRow + 3; i++) {
    for (let j = array9x9StartCol; j < array9x9StartCol + 3; j++) {
      array9x9.push(puzzle[i][j]);
    }
  }

  return array9x9.includes(num);
}

sudoku(puzzle);

//   sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] */
