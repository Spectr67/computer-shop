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
    console.log(typeof sortValue)
    sorter.sortingType = sortValue
    console.log(sorter.sortingType)
    console.log('cont')
    const sortedPrducts = model.sortProducts()
    renderProducts(sortedPrducts)
  },
}
