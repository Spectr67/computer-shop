const elSelectSort = document.querySelector('.sort')
elSelectSort.onchange = onSelectSorting

function onSelectSorting() {
  const sortValue = elSelectSort.value
  console.log(sortValue)
  controller.handleSelectSorting(sortValue)
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
