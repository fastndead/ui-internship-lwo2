/**
 *
 * @param events
 * @param date
 * @return {Date}
 */
export function closestEvent(events, date) {
  const closestDate = events.reduce((acc, curr) => {
    const currDate = new Date(curr.date);
    const closest = new Date(acc);

    if (Math.abs(currDate.getTime() - date.getTime()) <
        Math.abs(closest.getTime() - date.getTime())) {
      return currDate;
    }
    return closest;
  }, events[0].date);

  return events.find((event) => {
    return new Date(event.date).getTime() === closestDate.getTime();
  }).name;
}
