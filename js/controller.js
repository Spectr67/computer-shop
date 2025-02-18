const controller = {
  async handleLoadPage() {
    model.products = await api.getProducts()
    model.products = model.normalizeProductAttributes()
    model.convertPricesToUAH()

    const attributes = filter.createFilterFromProducts(model.products)
    renderFilter(attributes)
    renderPagination(paginator.totalPages, paginator.currentPage)

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

  handleSetPriceFrom(priceFrom) {
    pricer.from = +priceFrom
    console.log(pricer.to)
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceFrom(pricer.minPrice, pricer.maxPrice, pricer.from)
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  handleSetPriceTo(priceTo) {
    pricer.to = +priceTo
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceTo(pricer.minPrice, pricer.maxPrice, pricer.to)
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },
}
