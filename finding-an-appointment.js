function getStartTime(schedule, duration) {
  // find the gaps
  var startDay = new Date(0,0,0,9,0);
  var endDay = new Date(0,0,0,19,0);
  var gaps =[[]];
  var scheduleDate = [[]];
  for (var person = 0; person < schedule.length; person++) {
    scheduleDate[person] = [];
    gaps[person] = [];
    for (var sched = 0; sched < schedule[person].length; sched++) {
      var [startHour, startMinute] = schedule[person][sched][0].split(':');
      var [endHour, endMinute] = schedule[person][sched][1].split(':');
      var startTime = new Date(0,0,0,startHour,startMinute);
      var endTime = new Date(0,0,0,endHour,endMinute);
      scheduleDate[person][sched]= [startTime, endTime];
      // first element
      if (sched === 0) {
        gaps[person][sched] =[startTime, startTime - startDay];
        continue;
      }
      // last element
      if (sched === schedule[person].length -1) {
        gaps[person][sched] =[endTime, endDay -  endTime];
        continue;
      }
      // normal element this is wrong!!!
      gaps[person][sched] = [scheduleDate[person][sched - 1][1], startTime - scheduleDate[person][sched - 1][1]];
    }
  }
  return gaps;
}
console.log(getStartTime([
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
], 57));
