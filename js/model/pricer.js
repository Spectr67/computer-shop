const pricer = {
  minPrice: 0,
  maxPrice: Infinity,

  price(products) {
    return products.filter(
      product =>
        product.price >= this.minPrice && product.price <= this.maxPrice
    )
  },

  // getMaxProductPrice(products) {
  //   return Math.max(...products.map(product => product.price))
  // },

  // getMinProductPrice(products) {
  //   return Math.min(...products.map(product => product.price))
  // },
}
