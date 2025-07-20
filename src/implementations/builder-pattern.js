/**
 * @typedef {{
 * product: string,
 * total: number
 * }} Invoice
 */

/**
 * @typedef {{
 * product: string,
 * amount: number,
 * cost: number,
 * taxRate: number,
 * }} InvoiceBuilderInput
 */

/**
 * @template {Partial<InvoiceBuilderInput>} T
 */
export class Builder {
  /** @type {T} */
  #actual;

  /**
   * @param {string} product
   */
  static create(product) {
    return new Builder({ product });
  }

  /**
   * @private
   * @param {T} actual
   */
  constructor(actual) {
    this.#actual = actual;
  }

  /**
   * @param {number} amount
   */
  setAmount(amount) {
    return new Builder({ ...this.#actual, amount });
  }

  /**
   * @param {number} cost
   */
  setCost(cost) {
    return new Builder({ ...this.#actual, cost });
  }

  /**
   * @param {number} taxRate
   */
  setTaxRate(taxRate) {
    return new Builder({ ...this.#actual, taxRate });
  }

  /**
   * @this {Builder<InvoiceBuilderInput>}
   * @returns {Invoice}
   */
  build() {
    const actual = this.#actual;
    return {
      product: actual.product,
      total: actual.amount * actual.cost * (1 + actual.taxRate),
    };
  }
}
