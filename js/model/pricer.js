const pricer = {
  minPrice: 0,
  maxPrice: 0,
  from: 0,
  to: 0,

  price(products) {
    return products.filter(
      product => product.price >= this.from && product.price <= this.to
    )
  },

  getMaxProductPrice(products) {
    return Math.max(...products.map(product => product.price))
  },

  getMinProductPrice(products) {
    return Math.min(...products.map(product => product.price))
  },
  getFromProductPrice(products) {
    return this.getMinProductPrice(products)
  },

  setFrom(from) {
    this.from = from
    if (this.from >= this.to) {
      this.to = this.from
    }
  },
  setTo(to) {
    this.to = to
    if (this.to <= this.from) {
      this.from = this.to
    }
  },

  getToProductPrice(products) {
    return this.getMaxProductPrice(products)
  },
  updatePriceRange(products) {
    pricer.minPrice = pricer.getMinProductPrice(products)
    pricer.maxPrice = pricer.getMaxProductPrice(products)
    pricer.from = pricer.minPrice
    pricer.to = pricer.maxPrice
  },
}
