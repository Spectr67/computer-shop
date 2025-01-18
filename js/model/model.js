const model = {
  products: products,
  query: '',

  searchProducts() {
    if (this.query === '') return this.products
    return search.findProductsByQuery(this.query, this.products)
  },
}
