export function minNumberToPrime(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = sum; i < 2 * sum; i++) {
    let isPrime = sum !== 1;
    for (let j = 2; j< Math.sqrt(i)+1; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i - sum;
    }
  }
}
