export function followTheSpy(arr) {
  const route = [arr[0][0]];
  for (let i = 0; i < arr.length; i++) {
    route.push(arr.find((item) => {
      return item[0] === route[route.length - 1];
    })[1]);
  }
  return route.join(', ');
}
