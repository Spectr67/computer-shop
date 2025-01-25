function renderProducts(products) {
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}

document
  .querySelector('.products-on-page')
  .addEventListener('change', event => {
    itemsPerPage = parseInt(event.target.value, 10)
    currentPage = 1
    renderProducts()
  })
