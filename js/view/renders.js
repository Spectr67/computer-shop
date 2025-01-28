function renderProducts(products) {
  console.log(products)
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}
function renderCurrentPage(totalPages, currentPage) {
  const elDivPaginaion = document.querySelector('.pagination')
  const elDivPaginationPage = generatePagination(totalPages, currentPage)
  elDivPaginaion.innerHTML = ''
  elDivPaginaion.appendChild(elDivPaginationPage)
}
