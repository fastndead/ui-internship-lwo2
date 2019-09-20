/**
 * @description
 * Formats a working hours schedule, given as an array of objects,
 * in a human-friendly way.
 * @example
 * // returns [
 * //'MON - WED: 11:00 - 23:00',
 * //'THU - FRI: 12:00 - 23:00',
 * //'SAT: 10:00 - 23:00',
 * //'SUN: 11:00 - 23:00'
 * //];
 * formatWorkingHours([
 {
        "day": "sat",
        "from": "10:00",
        "to": "23:00"
    },
 {
        "day": "mon",
        "from": "11:00",
        "to": "23:00"
    },
 {
        "day": "tue",
        "from": "11:00",
        "to": "23:00"
    },
 {
        "day": "wed",
        "from": "11:00",
        "to": "23:00"
    },
 {
        "day": "thu",
        "from": "12:00",
        "to": "23:00"
    },
 {
        "day": "fri",
        "from": "12:00",
        "to": "23:00"
    },
 {
        "day": "sun",
        "from": "11:00",
        "to": "23:00"
    }
 ];)
 * @param {Array<Object>} data
 * @return {Array<String>}
 */
export function formatWorkingHours(data) {
  data.sort((day1, day2) => {
    return daysComparer(day1.day, day2.day);
  });
  const result = [];
  for (let i = 0; i < data.length; i++) {
    let j = i;
    let str = data[i].day.toUpperCase();

    while (i !== data.length - 1 &&
      data[j + 1].from === data[i].from &&
      data[j + 1].to === data[i].to) {
      j++;
    }

    if (j !== i) {
      str = str.concat(' - ', data[j].day.toUpperCase());
    }
    result.push(str + ': ' + data[i].from + ' - ' + data[i].to);
    i = j;
  }
  return result;
}

function dayToNumberMatch(dayStr) {
  switch (dayStr) {
    case 'mon': return 1;
    case 'tue': return 2;
    case 'wed': return 3;
    case 'thu': return 4;
    case 'fri': return 5;
    case 'sat': return 6;
    case 'sun': return 7;
  }
}

function daysComparer(day1, day2) {
  return dayToNumberMatch(day1) - dayToNumberMatch(day2);
}
