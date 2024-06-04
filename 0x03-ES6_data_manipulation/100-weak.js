export const weakMap = new WeakMap();

/* Maximum calls to make to an API's endpoint */
const MAX_CALLS = 5;

/* Tracks the number of calls made to an API's endpoint */
export default function queryAPI(endpoint) {
  if (weakMap.get(endpoint)) {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else {
    weakMap.set(endpoint, 0);
  }
  if (weakMap.get(endpoint) >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
