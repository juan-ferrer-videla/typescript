export const map = (array, callback) => {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(element, index, array);
  }

  return result;
};
