function renderProducts(products) {
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}
// function renderCurrentPage(totalPages, currentPage) {
//   const elDivPaginaion = document.querySelector('.pagination')
//   const elDivPaginationPage = generatePagination(totalPages, currentPage)
//   elDivPaginaion.innerHTML = ''
//   elDivPaginaion.appendChild(elDivPaginationPage)
// }

function renderPagination(totalPages, currentPage) {
  const elDivPaginaion = document.querySelector('.pagination')
  elDivPaginaion.innerHTML = ''
  for (let i = 0; i < totalPages; i++) {
    const isActive = i === currentPage
    const elPageLink = generatePaginationPageA(i, isActive)
    elDivPaginaion.appendChild(elPageLink)
  }
}
function renderMinAndMaxPriceInputs(minPrice, maxPrice) {
  const elInputPriceFrom = document.querySelector('#price_from')
  const elInputPriceTo = document.querySelector('#price_to')
  elInputPriceFrom.value = minPrice
  elInputPriceTo.value = maxPrice
}
