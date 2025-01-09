function renderProducts(products) {
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}

function renderPaginationControls() {
  const containerPagination = document.querySelector(
    '.container-pagination .pagination'
  )
  containerPagination.innerHTML = ''

  const totalPages = Math.ceil(products.length / itemsPerPage)

  if (totalPages <= 1) {
    containerPagination.style.display = 'none'
    return
  }

  containerPagination.style.display = 'flex'

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('a')
    button.href = '#'
    button.textContent = i
    button.className = 'page'
    if (i === currentPage) button.classList.add('active')

    button.addEventListener('click', event => {
      event.preventDefault()
      currentPage = i
      updateProducts()
    })

    containerPagination.appendChild(button)
  }
}

document
  .querySelector('.products-on-page')
  .addEventListener('change', event => {
    itemsPerPage = parseInt(event.target.value, 10)
    currentPage = 1
    updateProducts()
  })
