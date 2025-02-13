const elSelectSort = document.querySelector('.sort')
const elSelectPaginator = document.querySelector('.products-on-page')
const elInputPriceFrom = document.querySelector('#price_from')
const elInputPriceTo = document.querySelector('#price_to')
const ellearFilterBtn = document.querySelector('.btn.clear-filter')
const elButtonFilter = document.querySelector('.filter')

ellearFilterBtn.onclick = onClickClearFilter
elSelectSort.onchange = onChangeSelectSortingType
elSelectPaginator.onchange = onChangeSelectProductsOnPage
elInputPriceFrom.oninput = onInputSetPriceMin
elInputPriceTo.oninput = onInputSetPriceMax
elButtonFilter.onclick = onClickButtonFilter

function onClickClearFilter() {
  controller.handleClearFilter()
  renderFilterCheckboxesClean()
}

function onClickButtonFilter() {
  const listInputs = document.querySelectorAll('.wrap-filter [type="checkbox"]')
  const selectedAttributes = []

  listInputs.forEach(elInput => {
    if (elInput.checked) {
      const name = elInput.name
      const value = elInput.value
      console.log(name)
      console.log(value)
      const existingAttr = selectedAttributes.find(attr => attr.name === name)
      if (existingAttr) {
        existingAttr.value += `, ${value}`
      } else {
        selectedAttributes.push({ name, value })
      }
    }
  })
  console.log(selectedAttributes)
  controller.handleOnChangeSetAttibute(selectedAttributes)
}

// function onChangetAttr(e) {
//   const attr = e.target.name
//   const value = e.target.nextElementSibling.textContent
//   controller.handleOnChangeSetAttibute(value, attr)
// }
function onClickSetCurrentPage(e) {
  const currentPage = e.target.textContent
  console.log(currentPage)
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
