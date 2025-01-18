// const elSelectPriceASC = document.querySelector('.sort > option:nth-child(1)');
// const elSelectPriceDESC = document.querySelector('.sort > option:nth-child(2)');
// const elSelectCaptionASC = document.querySelector('.sort > option:nth-child(3)');
// const elSelectCaptionDESC = document.querySelector('.sort > option:nth-child(4)');
// const seSelect = document.querySelector('.sort')
// const value = seSelect.value
// console.log(value)

// // elSelectCaptionASC.onselect = onSelectSortCaption
// // elSelectCaptionDESC.onselect = onSelectSortCaption
// // elSelectPriceASC.onselect =
// // elSelectPriceDESC.onselect =

// // function onSelectSortCaption() {
// //   handle
// // }

// // function onSelectSortPrice(){

// // }

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
