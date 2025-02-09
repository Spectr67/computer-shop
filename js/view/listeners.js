const elSelectSort = document.querySelector('.sort')
const elSelectPaginator = document.querySelector('.products-on-page')
const elInputPriceFrom = document.querySelector('#price_from')
const elInputPriceTo = document.querySelector('#price_to')

elSelectSort.onchange = onChangeSelectSortingType
elSelectPaginator.onchange = onChangeSelectProductsOnPage
elInputPriceFrom.oninput = onInputSetPriceMin
elInputPriceTo.oninput = onInputSetPriceMax

const btnFilter = document.querySelector('.filter')
btnFilter.onclick = getSelectedArrtibutes
function getSelectedArrtibutes() {
  const inputs = document.querySelectorAll('input[type="checkbox"]')
  const selectedAttributes = []

  inputs.forEach(input => {
    if (input.checked) {
      const name = input.name
      const value = input.nextElementSibling.textContent

      if (selectedAttributes[name]) {
        selectedAttributes[name] += `, ${value}`
      } else {
        selectedAttributes.push({ name, value })
      }
    }
  })

  console.log(selectedAttributes)
}

function onChangetAttr(e) {
  const attr = e.target.name
  const value = e.target.nextElementSibling.textContent
  controller.handleOnChangeSetAttibute(value, attr)
}
function onclickSetCurrentPage(e) {
  const currentPage = e.target.textContent
  controller.handleSetCurrentPage(currentPage)
}

function onInputSetPriceMin(e) {
  const minPrice = e.target.value
  controller.handleSetPriceMin(minPrice)
}

function onInputSetPriceMax(e) {
  const maxPrice = e.target.value
  controller.handleSetPriceMax(maxPrice)
}

function onChangeSelectProductsOnPage(e) {
  const productsOnPage = e.target.value
  controller.handleSetProductsOnPage(productsOnPage)
}

function onChangeSelectSortingType(e) {
  const sortingType = e.target.value
  controller.handleSetProductSorting(sortingType)
}

function onInputSearchInput(e) {
  const query = e.target.value
  controller.handleSetSearchQuery(query)
}

function onLoadPage() {
  console.log('onLoadPage')
  controller.handleLoadPage()
}

document.addEventListener('DOMContentLoaded', onLoadPage)

const elInputSearch = document.querySelector('input[type=search]')

elInputSearch.oninput = onInputSearchInput

// onChangePage
// onChangeProductsOnPage
