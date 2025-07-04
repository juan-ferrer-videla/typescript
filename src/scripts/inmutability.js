const CONSTANT = /** @type {const} */ ({
  name: "Contant",
  type: "Narrow",
  mutable: false,
  arr: ["asd1", "asd2"],
});

// No es readonly en todos los nodos del arbol
// Deberias recorrer el arbol y e ir aplicando Object.freeze por todos lados - RUNTIME
const inmutable = Object.freeze({
  asd: "hello",
  options: ["javascript", "typescript"],
});

// La propiedad options no es readonly
inmutable.options.push;

const withTypeInmutable = /** @type {const} */ ({
  asd: "hello",
  options: [1, 2],
});
withTypeInmutable.options.push; // NO RUNTINE - Static type checking
