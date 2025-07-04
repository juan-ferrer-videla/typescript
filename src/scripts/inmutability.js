const CONSTANT = {
  name: "Contant",
  type: "Narrow",
  mutable: false,
  arr: ["asd1", "asd2"],
};

const inmutable = Object.freeze({
  asd: "hello",
  options: ["javascript", "typescript"],
});

inmutable.options.push;

const withTypeInmutable = {
  asd: "hello",
  options: [1, 2],
};
withTypeInmutable.options.push;
