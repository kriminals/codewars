/*
 * In this kata you are required to, given a string, replace every letter with its
 * position in the alphabet. If anything in the text isn't a letter, ignore it and
 * don't return it. a being 1, b being 2, etc
 */
function alphabetPosition(text) {
  return text.toUpperCase().split("").map(currentValue => currentValue.charCodeAt(0) - 64)
	.filter(currentValue => currentValue > 0 && currentValue < 27).join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
