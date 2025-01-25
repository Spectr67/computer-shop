const elSelectSort = document.querySelector('.sort')
elSelectSort.onchange = onChangeSelectSortingType

function onChangeSelectSortingType(e) {
  const sortingType = e.target.value
  controller.handleProductSorting(sortingType)
}

function onLoadPage() {
  console.log('onLoadPage')
  controller.handleLoadPage()
}

document.addEventListener('DOMContentLoaded', onLoadPage)

const elInputSearch = document.querySelector('input[type=search]')

elInputSearch.oninput = onInputSearchInput

function onInputSearchInput(e) {
  const query = e.target.value
  controller.handleSearchQuery(query)
}
