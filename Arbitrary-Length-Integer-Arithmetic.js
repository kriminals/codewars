let array = [1, 2, 3];
array[3]++;
console.log(array[4]);


// Arbitrary-Length Integer Arithmetic
function add(augend, addend) {
  // Rewrite this to support at least 100 digits
  if (addend.length > augend.length) {
    var augendArray = augend.split('').reverse();
    var addendArray = addend.split('').reverse();
  } else {
    var augendArray = addend.split('').reverse();
    var addendArray = augend.split('').reverse();
  }
  const sum = addendArray.map((x, i) => {
    const digitSum = Number(x) + Number(augendArray[i]);
    if ((digitSum) >= 10) {
      (addendArray[i + 1] == undefined) ? addendArray[i + 1] = 1 : addendArray[i + 1] = Number(addendArray[i + 1]) + 1;
      return digitSum - 10;
    }
    return digitSum;
  });
  if (sum.length !== addendArray.length) sum.push(1);
  return sum.reverse().join('');
}
// console.log(add('12345678901234567890', '123456789012345678901234567890123456789012345678901234567890'));
function subtract(minuend, subtrahend) {
  // Rewrite this to support at least 100 digits
  var difference = Number(minuend) - Number(subtrahend);
  return String(difference);
}

function multiply(multiplicand, multiplier) {
  // Rewrite this to support at least 100 digits
  const multiplicandArr = multiplicand.split('');
  const multiplierArr = multiplier.split('');
  const product = multiplierArr.map((x, i) =>
    Number(x) * Number(multiplicand) * Math.pow(10, multiplierArr.length - i - 1))
    .reduce((acc, val) => add(acc.toString(),val.toString()));
  return product;
}
console.log(multiply('12345678901234567890',
  '11112345678901234567890'));
function divide(dividend, divisor) {
  // Rewrite this to support at least 100 digits
  var quotient = Number(dividend) / Number(divisor);
  return String(quotient);
}