const paginator = {
  itemsPerPage: 10,
  currentPage: 0,

  updateProducts() {
    const start = currentPage * itemsPerPage
    const end = start + itemsPerPage
    const pageProducts = products.slice(start, end)
    return pageProducts
  },
}
