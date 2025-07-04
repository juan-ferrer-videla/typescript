/**
 * @import {DeepPartial} from "../types"
 * @import {CookieSettings} from "../typescript/types"
 */

/** @satisfies {CookieSettings} */
const options = {
  defaultSettings: {
    consentType: "explicit",
    warnings: {
      text: "You need to accept cookies",
      cta: "Accept cookies",
    },
  },
};

/**
 * @param {CookieSettings} options
 * @param { DeepPartial<CookieSettings["defaultSettings"]>} newOptions
 */
const overrideSettings = (options, newOptions) => {};
overrideSettings(options, {});
