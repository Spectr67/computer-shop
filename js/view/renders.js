function renderFilter(filter) {
  const elDivWrapFilter = document.querySelector('.wrap-filter')
  elDivWrapFilter.innerHTML = ''
  for (const key in filter) {
    const elAttribute = generateAttribute(key, filter[key])
    elDivWrapFilter.appendChild(elAttribute)
  }
}

function renderMinMaxPrice(minPrice, maxPrice) {
  const ellabelPriceFrom = document.querySelector('.wrap-range > label > span')
  const ellabelPriceTo = document.querySelector(
    '.wrap-range:last-of-type > label > span'
  )
  ellabelPriceFrom.textContent = minPrice
  ellabelPriceTo.textContent = maxPrice
}

function renderProducts(products) {
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}

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

function renderFilterCheckboxesClean() {
  const listInputs = document.querySelectorAll('input[type="checkbox"]')
  listInputs.forEach(elInput => {
    elInput.checked = false
  })
}
