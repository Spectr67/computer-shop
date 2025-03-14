document.addEventListener('DOMContentLoaded', onLoadPage)

function onClickClearFilter() {
  controller.handleClearFilter()
  renderFilterCheckboxesClean()
}

function onClickButtonFilter() {
  const listInputs = document.querySelectorAll('.wrap-filter [type="checkbox"]')
  const selectedAttributes = {}

  listInputs.forEach(elInput => {
    if (elInput.checked) {
      const name = elInput.name
      const value = elInput.value.trim()
      if (!selectedAttributes[name]) {
        selectedAttributes[name] = []
      }
      if (!selectedAttributes[name].includes(value)) {
        selectedAttributes[name].push(value)
      }
    }
  })
  const sortedAttributes = Object.entries(selectedAttributes)
    .sort(([nameA], [nameB]) => nameA.localeCompare(nameB))
    .map(([name, values]) => ({ name, value: values }))

  controller.handleOnChangeSetAttibute(sortedAttributes)
}

function onClickSetCurrentPage(e) {
  const currentPage = e.target.textContent
  controller.handleSetCurrentPage(currentPage)
}

function onInputSetPriceFrom(e) {
  const priceFrom = e.target.value
  controller.handleSetPriceFrom(priceFrom)
}

function onInputSetPriceTo(e) {
  const priceTo = e.target.value
  controller.handleSetPriceTo(priceTo)
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
  controller.handleLoadPage()
  const elInputSearch = document.querySelector('input[type=search]')
  const elSelectSort = document.querySelector('.sort')
  const elSelectPaginator = document.querySelector('.products-on-page')
  const elInputPriceFrom = document.querySelector('#price_from')
  const elInputPriceTo = document.querySelector('#price_to')
  const ellearFilterBtn = document.querySelector('.btn.clear-filter')
  const elButtonFilter = document.querySelector('.filter')
  elInputSearch.oninput = onInputSearchInput
  ellearFilterBtn.onclick = onClickClearFilter
  elSelectSort.onchange = onChangeSelectSortingType
  elSelectPaginator.onchange = onChangeSelectProductsOnPage
  elInputPriceFrom.oninput = onInputSetPriceFrom
  elInputPriceTo.oninput = onInputSetPriceTo
  elButtonFilter.onclick = onClickButtonFilter
}
