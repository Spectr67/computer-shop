let itemsPerPage = 10
let currentPage = 1

function updateProducts() {
  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const pageProducts = products.slice(start, end)

  renderProducts(pageProducts)
  renderPaginationControls()
}
