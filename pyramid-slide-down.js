/*###Lyrics... Pyramids are amazing! Both in architectural and mathematical sense. 
* If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. 
* For example, let's consider the following problem. Imagine that you have a plane pyramid 
* built of numbers, like this one here:
* 
*    /3/
*   \7\ 4 
*  2 \4\ 6 
* 8 5 \9\ 3
* Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23
* Your task is to write a function longestSlideDown  that takes a pyramid representation as argument 
* and returns its' longest 'slide down'. For example,
*/

function longestSlideDown (pyramid) {
  let height = pyramid.length;
  for (let k = height - 2; k >=0; k--) {
    pyramid[k] = pyramid[k].map((element, index) => Math.max(pyramid[k+1][index], pyramid[k+1][index+1]) + element );
  }
  return pyramid[0][0];
}