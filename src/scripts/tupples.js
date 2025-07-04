import { createSignal } from "../implementations/tupples.js";

/**
 * @type {readonly [number, number]}
 */
const tupple = [2, 2];

tupple.push;

const [getNum, setNum] = createSignal(5);
console.log(getNum());
setNum(12);
console.log(getNum());
setNum((prev) => prev * 2);
console.log(getNum());
