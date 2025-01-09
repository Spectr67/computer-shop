function onLoadPage() {
  // body
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
