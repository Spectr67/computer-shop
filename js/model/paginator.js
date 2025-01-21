const paginator = {
  productsPerPage: 3,
  currentPage: 0,
  totalPages: 1,

  paginate(products) {
    const start = this.currentPage * this.productsPerPage
    const end = start + this.productsPerPage
    return products.slice(start, end)
  },
}

const page = paginator.paginate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])

page
