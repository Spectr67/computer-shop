const controller = {
  async handleLoadPage() {
    const products = await api.getProducts()
    model.products = products
    paginator.currentPage = 1
    renderProducts(model.convertPricesToUAH(products))
    renderCurrentPage(
      paginator.getTotalPages(model.products),
      paginator.currentPage
    )
  },

  handleSetSearchQuery(query) {
    searcher.query = query
    renderProducts(model.computedProducts())
  },

  handleSetProductSorting(sortingType) {
    sorter.sortingType = sortingType
    renderProducts(model.computedProducts())
  },

  handleSetProductsOnPage(productsPerPage) {
    paginator.productsPerPage = productsPerPage
    renderProducts(model.computedProducts())
  },

  handleSetCurrentPage(page) {
    paginator.currentPage = page
    renderCurrentPage(paginator.totalPages, paginator.currentPage)
    renderProducts(model.computedProducts())
  },

  handleSetPriceMin(minPrice) {
    console.log(typeof minPrice)
    pricer.minPrice = +minPrice
    renderProducts(model.computedProducts())
  },

  handleSetPriceMax(maxPrice) {
    pricer.maxPrice = +maxPrice
    renderProducts(model.computedProducts())
  },
}
