export const createSignal = (initialValue) => {
  let value = initialValue;

  const getter = () => {
    return value;
  };

  const setter = (newValue) => {
    if (!(newValue instanceof Function)) {
      value = newValue;
    } else {
      value = newValue(value);
    }
  };

  return [getter, setter];
};
