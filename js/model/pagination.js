let itemsPerPage = 10
let currentPage = 0

function updateProducts() {
  const start = currentPage * itemsPerPage
  const end = start + itemsPerPage
  const pageProducts = products.slice(start, end)

  renderProducts(pageProducts)
  renderPaginationControls()
}
