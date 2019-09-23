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
  const sortedData = Array.from(data)
  sortedData.sort((day1, day2) => {
    return daysComparer(day1.day, day2.day);
  });
  const result = [];
  for (let i = 0; i < sortedData.length; i++) {
    let j = i;
    let str = sortedData[i].day.toUpperCase();

    while (i !== sortedData.length - 1 &&
    sortedData[j + 1].from === sortedData[i].from &&
    sortedData[j + 1].to === sortedData[i].to) {
      j++;
    }

    if (j !== i) {
      str = str.concat(' - ', sortedData[j].day.toUpperCase());
    }
    result.push(str + ': ' + sortedData[i].from + ' - ' + sortedData[i].to);
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
