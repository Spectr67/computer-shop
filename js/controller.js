const controller = {
  async handleLoadPage() {
    model.products = await api.getProducts()
    model.convertPricesToUAH()

    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)

    // const minPrice = pricer.getMinProductPrice(products)
    // const maxPrice = pricer.getMaxProductPrice(products)
    // renderMinAndMaxPriceInputs(minPrice, maxPrice)
  },

  handleSetSearchQuery(query) {
    searcher.query = query
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetProductSorting(sortingType) {
    sorter.sortingType = sortingType
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetProductsOnPage(productsPerPage) {
    paginator.productsPerPage = +productsPerPage
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetCurrentPage(page) {
    paginator.currentPage = +page
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetPriceMin(minPrice) {
    pricer.minPrice = +minPrice
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetPriceMax(maxPrice) {
    pricer.maxPrice = +maxPrice
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },
}
