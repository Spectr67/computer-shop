function renderProducts(products) {
  console.log(products)
  const elDivContainerProducts = document.querySelector('.container-products')
  elDivContainerProducts.innerHTML = ''
  products.forEach(product => {
    const elDivProduct = generateProductCard(product)
    elDivContainerProducts.appendChild(elDivProduct)
  })
}
