/*
 * Write a function that will find all the anagrams of a word from a list. 
 * You will be given two inputs a word and an array with words. 
 * You should return an array of all the anagrams or an empty array 
 * if there are none. 
 */
function anagrams(word, words) {
  var wordArr = word.split('');
  var results =  words.filter(lexi => {
    if (lexi.length !== word.length) return false;
    var lexiArr = lexi.split('');
    return wordArr.every(letter => {
      if (lexiArr.indexOf(letter) == -1) return false;
      lexiArr.splice(lexiArr.indexOf(letter), 1);
      return true;
    });
  });
  return results.length === 0 ? [] : results;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']); 

