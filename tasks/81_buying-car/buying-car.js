/**
 * @description
 *
 * @example
 * // returns [6, 766]
 * nbMonths(2000, 8000, 1000, 1.5)
 * @param {Number} startPriceOld
 * @param {Number} startPriceNew
 * @param {Number} savingsPerMonth
 * @param {Number} percentLossByMonth
 * @return {number[]}
 */

export function nbMonths(
    startPriceOld,
    startPriceNew,
    savingsPerMonth,
    percentLossByMonth
) {
  let money = 0;
  let months = 0;
  while (money + startPriceOld < startPriceNew) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }
    startPriceOld = Math.round(startPriceOld -
      (startPriceOld / 100 * percentLossByMonth));
    startPriceNew = Math.round(startPriceNew -
      (startPriceNew / 100 * percentLossByMonth));
    money += savingsPerMonth;
  }
  return [months, money + startPriceOld - startPriceNew];
}


