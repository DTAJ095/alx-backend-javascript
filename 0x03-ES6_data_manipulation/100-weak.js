/**
 * weak map of calls
 */
export const weakMap = new WeakMap();

/* Maximum calls to make to an API's endpoint */
const MAX_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint
 * @param {{
 *   protocol: string,
 *   name: string,
 * }} endpoint - the endpoint where the call is made
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_CALLS) {
    throw Error('Endpoint load is high');
  }
}
