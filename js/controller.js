const controller = {
  async handleLoadPage() {
    model.products = await api.getSomething()
    model.products = normalized.normalizeProducts(model.products)
    model.convertPricesToUAH()
    const attributes = filter.createFilterFromProducts(model.products)
    renderFilter(attributes)
    const minPrice = pricer.getMinProductPrice(model.products)
    const maxPrice = pricer.getMaxProductPrice(model.products)
    pricer.minPrice = +minPrice
    pricer.maxPrice = +maxPrice
    pricer.from = +minPrice
    pricer.to = +maxPrice
    renderProductsFavorite(model.favorites)
    renderSpanPriceFromTo(pricer.minPrice, pricer.maxPrice)
    renderInputPriceFrom(minPrice, maxPrice, pricer.from)
    renderInputPriceTo(minPrice, maxPrice, pricer.to)
    renderProducts(model.computedProducts())
    renderPagination(paginator.totalPages, paginator.currentPage)
  },

  async handleFavorite(productID) {
    const product = model.getProductByID(+productID)
    api.getType = URL_FAVORITES
    if (product.favorite) {
      product.favorite = false
      model.removeFavoriteByID(+productID)
    } else {
      product.favorite = true
      model.favorites.push(product)
      api.deleteSomethingById(+productID)
    }
    console.log(product)
  },

  async handleLoadPageCFC() {
    renderProducts(model.favorites)
  },
  renderUtilityFunction() {
    paginator.currentPage = 0
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
    pricer.updatePriceRange(model.computedProducts())
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
    pricer.setFrom(+priceFrom)
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceFrom(pricer.minPrice, pricer.maxPrice, pricer.from)
    renderInputPriceTo(pricer.minPrice, pricer.maxPrice, pricer.to)
    this.renderUtilityFunction()
  },

  handleSetPriceTo(priceTo) {
    pricer.setTo(+priceTo)
    renderSpanPriceFromTo(pricer.from, pricer.to)
    renderInputPriceTo(pricer.minPrice, pricer.maxPrice, pricer.to)
    renderInputPriceFrom(pricer.minPrice, pricer.maxPrice, pricer.from)
    this.renderUtilityFunction()
  },
}
