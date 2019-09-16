export function runningAverage() {
  const numbers = [];

  return (num) => {
    numbers.push(num);
    return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
  };
}
