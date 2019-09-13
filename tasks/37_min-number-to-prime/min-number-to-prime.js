export function minNumberToPrime(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  for (let i = sum; i < 2 * sum; i++) {
    if (isPrime(i)) {
      return i - sum;
    }
  }
}

function isPrime(number) {
  let isPrime = number !== 1;
  for (let j = 2; j< Math.sqrt(number)+1; j++) {
    if (number % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    return true;
  }
}
