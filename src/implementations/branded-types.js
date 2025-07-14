/**
 * @import {AccertFunction, Brand, TypePredicateFunction} from "../typescript/types"
 */

/**
 * @typedef {Brand<string, "email">} Email
 */

/**
 * @type {TypePredicateFunction<string, Email>}
 */
export function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
/**
 * @type {AccertFunction<string, Email>}
 * @throws {Error} throws if email isn't a valid email.
 */
export function assertEmail(email) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error(`${email} isn't a valid email`);
  }
}

/**
 * @param {Email} email
 */
export function sendEmail(email) {
  //send email
}
