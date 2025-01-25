// const { sortingType } = require("./model/sorter")

const controller = {
  async handleLoadPage() {
    const products = await api.getProducts()
    model.products = products
    renderProducts(model.products)
  },

  handleSetSearchQuery(query) {
    searcher.query = query
    const searched = model.computedProducts()
    renderProducts(searched)
  },

  handleSetProductSorting(sortingType) {
    sorter.sortingType = sortingType
    const sorted = model.computedProducts()
    renderProducts(sorted)
  },

  handleSetProductsOnPage(productsPerPage) {
    paginator.productsPerPage = productsPerPage
    const paginated = model.computedProducts()
    renderProducts(paginated)
  },

  handleSetCurrentPage(page) {
    //
  },

  handleSetPriceMin(minPrice) {
    pricer.minPrice = minPrice
    const priced = model.computedProducts()
    renderProducts(priced)
  },

  handleSetPriceMax(maxPrice) {
    pricer.maxPrice = maxPrice
    renderProducts(model.computedProducts())
  },
}
