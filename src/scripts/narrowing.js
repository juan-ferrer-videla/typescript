import {
  narrowReverse,
  narrowTrim,
  narrowLength,
  narrowSplit,
} from "../implementations/narrowing.js";

const cookieTypes = /** @type {const} */ ([
  "required",
  "functional",
  "analitycs",
  "other",
]);

/**
 * @type {Record< typeof cookieTypes[number], () => void >}
 */
const object = {
  required: () => {},
  analitycs: () => {},
  functional: () => {},
  // other: () => {},
};

const narrowReverseRes = narrowReverse("al reves");
const narrowTrimRes = narrowTrim("  \n   Juanfer dev   \n\t   ");
const narrowLengthRes = narrowLength("typescript");
const narrowSplitRes = narrowSplit("ts_es_mejor", "_");
