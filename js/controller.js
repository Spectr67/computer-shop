const controller = {
  handleLoadPage() {
    // api call
    renderProducts(model.products)
  },

  handleSearchQuery(query) {
    searcher.query = query
    const filteredProducts = model.searchProducts()
    renderProducts(filteredProducts)
  },
  handleSelectSorting(sortValue) {
    console.log
    sorter.sortingType = sortValue
    const sortedPrducts = model.sortProducts(sortValue)
    renderProducts(sortedPrducts)
  },
}
