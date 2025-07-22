import {
  narrowReverse,
  narrowTrim,
  narrowLength,
  narrowSplit,
} from "../implementations/narrowing.js";

const cookieTypes = ["required", "functional", "analitycs", "other"];

const object = {
  required: () => {},
  analitycs: () => {},
  functional: () => {},
  // other: () => {},
};

const toReverse = "al reves";
const toTrim = "  \n   Juanfer dev   \n\t   ";
const toLength = "typescript";
const toSplit = "ts_es_mejor";
const toSplitSep = "_";

const normalReverse = toReverse.split("").reverse().join("");
const narrowReverseRes = narrowReverse(toReverse);

const normalTrim = toTrim.trim();
const narrowTrimRes = narrowTrim(toTrim);

const normalLength = toLength.length;
const narrowLengthRes = narrowLength(toLength);

const normalSplit = toSplit.split(toSplitSep);
const narrowSplitRes = narrowSplit(toSplit, toSplitSep);
