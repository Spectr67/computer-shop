document.addEventListener('DOMContentLoaded', onLoadPageCFC)

function onLoadPageCFC() {
  controller.handleLoadPageCFC()
}

function onClickFavorite(e) {
  const productCard = e.target.closest('.wrap-product')
  const inputId = productCard.querySelector('input[type="hidden"]')
  const productId = inputId.value
  e.target.classList.toggle('favorite')
  controller.handleFavorite(productId)
}
function onClickCart(e) {
  const productCard = e.target.closest('.wrap-product')
  const inputId = productCard.querySelector('input[type="hidden"]')
  const productId = inputId.value
  e.target.classList.toggle('cart')
  controller.handleCart(productId)
}
function onClickCompare(e) {
  const productCard = e.target.closest('.wrap-product')
  const inputId = productCard.querySelector('input[type="hidden"]')
  const productId = inputId.value
  e.target.classList.toggle('compare')
  controller.handleCompare(productId)
}
