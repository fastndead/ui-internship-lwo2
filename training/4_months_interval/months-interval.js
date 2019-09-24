/**
 * @description
 * Finds all months between two dates
 * @example
 * // returns ['January']
 * monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1))
 * @param {Date} start
 * @param {Date} end
 * @return {Array<String>}
 */
export function monthsInterval(start, end) {
  let result = [];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  if (end < start) {
    const tmp = end;
    end = start;
    start = tmp;
  }
  const endYear = end.getFullYear();
  const startYear = start.getFullYear();
  const diff = endYear - startYear;

  if (diff === 0 && end.getMonth() === start.getMonth()) {
    return [monthNames[end.getMonth()]];
  }
  if (diff > 1 || (diff === 1 && end.getMonth() === start.getMonth())) {
    return monthNames;
  }
  let startMonth = start.getMonth();
  const endMonth = end.getMonth();
  if (diff === 0) {
    for (let i = startMonth; i <= endMonth; i++) {
      result.push(monthNames[i]);
    }
    return result;
  }


  for (let i = 0; i <= endMonth; i++) {
    result.push(monthNames[i]);
  }
  for (let i = startMonth; i <= 11; i++) {
    result.push(monthNames[i]);
  }
  return result;
}


