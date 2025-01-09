const controller = {
  handleLoadPage() {
    // api call
    renderProducts(model.products)
  },

  handleSearchQuery(query) {
    model.query = query
    renderProducts(model.searchProducts())
  },
}
