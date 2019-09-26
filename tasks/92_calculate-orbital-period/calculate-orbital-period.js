/**
 * @description
 * Calculates orbital period of an object based on its' average altitude
 * @example
 * // returns [{name: "sputnik", orbitalPeriod: 86400}]
 * orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])
 * @param {Array} arr - specs of the object
 * @return {Array} - result with average altitude replaced with orbital period
 */
export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  return arr.map((item) => {
    const avgAlt = item.avgAlt;
    delete item.avgAlt;
    const orbitalRadius = avgAlt + EARTH_RADIUS;
    item.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(
        Math.pow(orbitalRadius, 3) / GM
    ));
    return item;
  });
}
