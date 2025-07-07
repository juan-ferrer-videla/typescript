/**
 * @import {AccertFunction, Brand} from "../typescript/types"
 */

/**
 * @typedef {Brand<string, "email">} Email
 */

/**
 * @type {AccertFunction<string, Email>}
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
