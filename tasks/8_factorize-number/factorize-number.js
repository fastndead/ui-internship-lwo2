export function factorialize(n) {
  if (n < 0) {
    return -1;
<<<<<<< HEAD
  } else if (n === 0) {
=======
  } else if (n == 0) {
>>>>>>> 9a99949c5f7851e58d6f4aed49ae863c99a53a6f
    return 1;
  } else {
    return (n * factorialize(n - 1));
  }
}
