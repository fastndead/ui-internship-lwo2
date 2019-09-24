/**
 * @description
 * Boy drops ball from height h, we need to calculate base on parameters
 * how many time will his mother (height = windowHeight) wee ball
 * either falling or bouncing
 * @example
 * // returns 3
 * bouncingBall(30.0, 0.66, 1.5)
 * @param {Number} h - height of first drop
 * @param {Number} bounce - bounce percentage
 * @param {Number} windowHeight - mother height
 * @return {number}
 */
export function bouncingBall(h, bounce, windowHeight) {
  if (h < 0 || 0 < bounce < 1 || windowHeight > h) {
    return -1;
  }
  let numberOfTimesMotherSeesBall = 0;
  while (h > windowHeight) {
    h = h * bounce;
    numberOfTimesMotherSeesBall += 2;
  }
  return numberOfTimesMotherSeesBall - 1;
}
