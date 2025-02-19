const controller = {
  async handleLoadPage() {
    model.products = await api.getProducts()
    model.products = model.normalizeProductAttributes()
    model.convertPricesToUAH()
    const attributes = filter.createFilterFromProducts(model.products)
    renderFilter(attributes)
    const minPrice = pricer.getMinProductPrice(model.products)
    const maxPrice = pricer.getMaxProductPrice(model.products)
    pricer.minPrice = +minPrice
    pricer.maxPrice = +maxPrice
    pricer.from = +minPrice
    pricer.to = +maxPrice
    renderSpanPriceFromTo(pricer.minPrice, pricer.maxPrice)
    renderInputPriceFrom(minPrice, maxPrice, pricer.from)
    renderInputPriceTo(minPrice, maxPrice, pricer.to)
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  renderUtilityFunction() {
    paginator.currentPage = +0
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleClearFilter() {
    attributer.settedAtributes = []
    this.renderUtilityFunction()
    renderFilterCheckboxesClean()
  },

  handleOnChangeSetAttibute(selectedAttributesf) {
    attributer.settedAtributes = selectedAttributesf
    this.renderUtilityFunction()
  },

  handleSetSearchQuery(query) {
    searcher.query = query
    const attributes = filter.createFilterFromProducts(model.computedProducts())
    renderFilter(attributes)
    renderSpanPriceFromTo(pricer.minPrice, pricer.maxPrice)
    renderInputPriceFrom(pricer.minPrice, pricer.maxPrice, pricer.from)
    renderInputPriceTo(pricer.minPrice, pricer.maxPrice, pricer.to)
    this.renderUtilityFunction()
  },

  handleSetProductSorting(sortingType) {
    sorter.sortingType = sortingType
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetProductsOnPage(productsPerPage) {
    paginator.productsPerPage = +productsPerPage
    this.renderUtilityFunction()
  },

  handleSetCurrentPage(page) {
    paginator.currentPage = +page
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetPriceFrom(priceFrom) {
    pricer.from = +priceFrom
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceFrom(pricer.minPrice, pricer.maxPrice, pricer.from)
    this.renderUtilityFunction()
  },

  handleSetPriceTo(priceTo) {
    pricer.to = +priceTo
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceTo(pricer.minPrice, pricer.maxPrice, pricer.to)
    this.renderUtilityFunction()
  },
}
