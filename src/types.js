export {};

/**
 * @template T
 * @typedef {{
 * [K in keyof T]?: T[K] extends Function ? T[K] : T[K] extends Object ? DeepPartial<T[K]> : T[K]
 * }} DeepPartial
 */
