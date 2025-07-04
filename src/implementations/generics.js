/**
 * @template T, K
 * @param {T[]} array
 * @param {(element: T, index: number, array: T[]) => K} callback
 * @returns {K[]}
 */

export const map = (array, callback) => {
  /**
   * @type {K[]}
   */
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = /** @type {T} */ (array[index]);
    callback(element, index, array);
  }

  return result;
};
