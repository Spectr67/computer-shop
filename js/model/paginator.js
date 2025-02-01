const paginator = {
  productsPerPage: 10,
  currentPage: 0,
  totalPages: 0,

  calcTotalPages(products) {
    this.totalPages = Math.ceil(products.length / this.productsPerPage)
  },

  paginate(products) {
    const start = this.currentPage * this.productsPerPage
    const end = start + this.productsPerPage
    this.calcTotalPages(products)
    return products.slice(start, end)
  },
}
