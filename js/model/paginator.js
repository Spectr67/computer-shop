const paginator = {
  productsPerPage: 10,
  currentPage: 0,
  totalPages: 0,

  getTotalPages(products) {
    return (this.totalPages = Math.ceil(products.length / this.productsPerPage))
  },

  paginate(products) {
    const start = this.currentPage * this.productsPerPage
    const end = start + this.productsPerPage
    return products.slice(start, end)
  },
}
