const paginator = {
  productsPerPage: 5,
  currentPage: 0,
  totalPages: 0,

  paginate(products) {
    this.totalPages = Math.ceil(products.length / this.productsPerPage)
    const start = this.currentPage * this.productsPerPage
    const end = start + this.productsPerPage
    return products.slice(start, end)
  },
}
// module.exports = paginator
// const page = paginator.paginate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
// paginator
// page
