/**
 * @template {string} S
 * @typedef {S extends `${infer First}${infer Rest}` ? `${Reverse<Rest>}${First}`: ""} Reverse
 */

/**
 * @template {string} S
 * @param {S} string
 * @returns {Reverse<S>}
 */
export const narrowReverse = (string) => {
  let result = "";

  for (let index = string.length - 1; index >= 0; index--) {
    const char = string[index];
    result += char;
  }

  return /** @type {Reverse<S>}*/ (result);
};

/**
 * @typedef { "\n" | " " | "\t" } Chars
 */

/**
 * @template {string} S
 * @typedef {S extends `${Chars}${infer Rest}` ? Trim<Rest> : S extends `${infer Rest}${Chars}` ? Trim<Rest> : S} Trim
 */

/**
 * @template {string} S
 * @param {S} string
 * @returns {Trim<S>}
 */
export const narrowTrim = (string) => {
  return /** @type {Trim<S>} */ (string.trim());
};

/**
 * @template {string} S
 * @template {0[]} Acc
 * @typedef {S extends `${infer _}${infer Rest}` ? Length<Rest, [...Acc, 0]> : Acc["length"]} Length
 */

/**
 * @template {string} S
 * @param {S} string
 * @returns {Length<S,[]>}
 */
export const narrowLength = (string) => {
  return /** @type {Length<S, []>} */ (string.length);
};

/**
 * @template {string} S
 * @template {string} Splitter
 * @template {string[]} Accumulator
 * @typedef {S extends `${infer First}${Splitter}${infer Second}` ? Split<Second, Splitter, [...Accumulator, First]> : [...Accumulator, S]} Split
 */

/**
 * @template {string} S
 * @template {string} Splitter
 * @param {S} string
 * @param {Splitter} splitter
 */
export const narrowSplit = (string, splitter) => {
  return /** @type {Split<S, Splitter, []>} */ (string.split(splitter));
};
