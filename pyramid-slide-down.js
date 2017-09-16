function longestSlideDown (pyramid) {
  let height = pyramid.length;
  for (let k = height - 2; k >=0; k--) {
    pyramid[k] = pyramid[k].map((element, index) => Math.max(pyramid[k+1][index], pyramid[k+1][index+1]) + element );
  }
  return pyramid[0][0];
}