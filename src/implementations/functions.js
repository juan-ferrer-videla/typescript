/**
 * @param { string } name name of the person
 * @param { "jr" | "sr" | "tl" } seniority level in the organization
 * @param { number } age age in years of the person
 * @param { {
 * seniority?: boolean
 * age?: boolean
 * } } [options] object with optional params
 * @returns { string } return a string with the greet
 * @example getGreet("Juan", "Ferrer", 28);
 * // returns "Hello Juan\nYou're 28 years old\nYour seniority is jr"
 * @example getGreet("Juan", "Ferrer", 28, { seniority: false })
 * // returns "Hello Juan Ferrer\nYou're 28 years old"
 * @link documentation on https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 */
export const getGreet = (name, age, seniority, options) => {
  const showAge = options?.age ?? true;
  const showSeniority = options?.seniority ?? true;

  /**
   * @type { Record< typeof seniority, string > }
   */
  const levelsOfSeniority = {
    jr: "Junior",
    sr: "Senior",
    tl: "Tech Lead",
  };

  let greet = `Hello ${name}`;
  if (showAge) greet += `\nYou're ${age} years old`;
  if (showSeniority)
    greet += `\nYour seniority is ${levelsOfSeniority[seniority]}`;

  return greet;
};
