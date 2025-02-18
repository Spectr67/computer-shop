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
    return Math.min(...products.map(product => product.price))
  },

  getToProductPrice(products) {
    return Math.min(...products.map(product => product.price))
  },
}
