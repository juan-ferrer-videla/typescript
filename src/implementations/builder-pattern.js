export class Builder {
  #actual;

  static create(product) {
    return new Builder({ product });
  }

  constructor(actual) {
    this.#actual = actual;
  }

  setAmount(amount) {
    return new Builder({ ...this.#actual, amount });
  }

  setCost(cost) {
    return new Builder({ ...this.#actual, cost });
  }

  setTaxRate(taxRate) {
    return new Builder({ ...this.#actual, taxRate });
  }

  build() {
    const actual = this.#actual;
    return {
      product: actual.product,
      total: actual.amount * actual.cost * (1 + actual.taxRate),
    };
  }
}
