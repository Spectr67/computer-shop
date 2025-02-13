const controller = {
  async handleLoadPage() {
    model.products = await api.getProducts()
    // model.products = prdocutsTest
    // model.normalizeProducts()  // убрать запятые и пробелы где надо
    model.convertPricesToUAH()

    renderProducts(model.computedProducts())
    const attributes = filter.createFilterFromProducts(model.products)
    renderFilter(attributes)
    renderPagination(paginator.totalPages, paginator.currentPage)

    // const minPrice = pricer.getMinProductPrice(model.products)
    // const maxPrice = pricer.getMaxProductPrice(model.products)
    // renderMinAndMaxPriceInputs(minPrice, maxPrice)
  },

  handleClearFilter() {
    attributer.settedAtributes = []
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
    renderFilterCheckboxesClean()
  },

  handleOnChangeSetAttibute(selectedAttributesf) {
    attributer.settedAtributes = selectedAttributesf
    console.log(selectedAttributesf)
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
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
    paginator.currentPage = +0
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
