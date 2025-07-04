/**
 * @template T
 * @param {T} initialValue
 * @returns {readonly [getter: () => T, setter: (newValue: T | ((prev: T) => T )) => void ]}
 */
export const createSignal = (initialValue) => {
  let value = initialValue;

  /**
   * @returns {T}
   */
  const getter = () => {
    return value;
  };

  /**
   * @param {T | ((prev: T) => T )} newValue
   * @returns {void}
   */
  const setter = (newValue) => {
    if (!(newValue instanceof Function)) {
      value = newValue;
    } else {
      value = newValue(value);
    }
  };

  return [getter, setter];
};
