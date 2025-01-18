const controller = {
  handleLoadPage() {
    // api call
    renderProducts(model.products)
  },

  handleSearchQuery(query) {
    model.query = query
    const filteredProducts = model.searchProducts()
    renderProducts(filteredProducts)
  },
}
