/*
 * Write a function, which takes a non-negative integer (seconds) as input
 * and returns the time in a human-readable format (HH:MM:SS)
 */
function humanReadable(seconds) {
  var hh, mm, ss;
  hh = Math.trunc(seconds / 3600);
  mm = Math.trunc((seconds % 3600) / 60);
  ss = seconds - (hh * 3600) - (mm * 60);
  var twoDigits = x => x < 10? '0' + x: x;
  return twoDigits(hh) + ':' + twoDigits(mm) + ':' + twoDigits(ss);
}
