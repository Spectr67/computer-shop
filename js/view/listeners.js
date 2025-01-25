const elSelectSort = document.querySelector('.sort')
const elSelectPaginator = document.querySelector('.products-on-page')
elSelectSort.onchange = onChangeSelectSortingType
elSelectPaginator.onchange = onChangeSelectPaginate
const elInputPriceFrom = document.querySelector('#price_from')
const elInputPriceTo = document.querySelector('#price_to')
elInputPriceFrom.oninput = oninputSetPriceMin
// elInputPriceTo.oninput = oninputSetPriceMax

function oninputSetPriceMin(e) {
  const minPrice = e.target.value
  const maxPrice = elInputPriceTo.value
  controller.handleSetPriceMin(minPrice, maxPrice)
}

function onChangeSelectPaginate(e) {
  const productsPerPage = e.target.value
  controller.handlePaginate(productsPerPage)
}

function onChangeSelectSortingType(e) {
  const sortingType = e.target.value
  controller.handleProductSorting(sortingType)
}

function onInputSearchInput(e) {
  const query = e.target.value
  controller.handleSearchQuery(query)
}

function onLoadPage() {
  console.log('onLoadPage')
  controller.handleLoadPage()
}

document.addEventListener('DOMContentLoaded', onLoadPage)

const elInputSearch = document.querySelector('input[type=search]')

elInputSearch.oninput = onInputSearchInput
