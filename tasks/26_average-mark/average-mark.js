export function getAverage(marks) {
  return Math.round(marks.reduce((previous, current) => {
    return current += previous;
  }) / marks.length);
}
