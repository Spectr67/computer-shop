// const { sortingType } = require("./model/sorter")

const controller = {
  async handleLoadPage() {
    const products = await api.getProducts()
    model.products = products
    renderProducts(model.products)
  },

  handleSearchQuery(query) {
    searcher.query = query
    const searched = model.computedProducts(model.products)
    renderProducts(searched)
  },

  handleProductSorting(sortingType) {
    sorter.sortingType = sortingType
    const sorted = model.computedProducts(model.products)
    renderProducts(sorted)
  },

  handlePaginate(productsPerPage) {
    paginator.productsPerPage = productsPerPage
    const paginated = model.computedProducts(model.products)
    renderProducts(paginated)
  },
}
