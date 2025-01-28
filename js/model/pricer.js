const pricer = {
  minPrice: 0,
  maxPrice: Infinity,

  price(products) {
    return products.filter(
      product =>
        product.price >= this.minPrice && product.price <= this.maxPrice
    )
  },
}
