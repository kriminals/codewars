/*
 * Write an algorithm that will identify valid IPv4 addresses in 
 * dot-decimal format. Input to the function is guaranteed to be a single string.
 */
function isValidIP(str) {
  var strArr = str.split('.');
  if (strArr.length !== 4) return false;
  var myRegExp = /\D/g;
  return strArr.every(curr => {
    if (myRegExp.test(curr))
    if (curr.length > 0 && curr.charAt(0) == '0') return false;
    if (parseInt(curr, 10) < 0 || parseInt(curr, 10) > 255) return false;
    return !myRegExp.test(curr);
  });
}
isValidIP('123.45.67.89');
