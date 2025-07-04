export const narrowReverse = (string) => {
  let result = "";

  for (let index = string.length - 1; index >= 0; index--) {
    const char = string[index];
    result += char;
  }

  return result;
};

export const narrowTrim = (string) => {
  return string.trim();
};

export const narrowLength = (string) => {
  return string.length;
};

export const narrowSplit = (string, splitter) => {
  return string.split(splitter);
};
