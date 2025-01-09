const model = {
  products: products,
  query: '',

  searchProducts() {
    if (this.query === '') return this.products
    return this.products.filter(product => product.caption.includes(this.query))
  },
}
