export function followTheSpy(arr) {
  const initialPoint = arr[0][0];
  const route = [initialPoint];

  for (let i = 0; i < arr.length; i++) {
    let nextItinerary = arr.find((item) => {
      return item[0] === route[route.length - 1];
    });
    let [, nextRoutePoint] = nextItinerary;
    route.push(nextRoutePoint);
  }
  return route.join(', ');
}
