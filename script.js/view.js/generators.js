function generateProductCard(product) {
  const { id, imgSrc, title, price, attributes } = product

  const elDivProduct = document.createElement('div')
  const elDivWrapA = document.createElement('div')
  const elLink = document.createElement('a')
  const elDivImg = document.createElement('div')
  const elImg = document.createElement('img')
  const elDivTitle = document.createElement('div')
  const elTitle = document.createElement('h3')
  const elDivAttributes = document.createElement('div')
  const elDivPrice = document.createElement('div')
  const elPrice = document.createElement('p')
  const elDivRow = document.createElement('div')
  const elDivButtonCart = document.createElement('div')
  const elDivButtonFavorite = document.createElement('div')
  const elDivButtonCompare = document.createElement('div')
  const elButtonCart = document.createElement('button')
  const elButtonFavorite = document.createElement('button')
  const elButtonCompare = document.createElement('button')
  const elDivNew = document.createElement('div')

  elLink.href = `?type=product_card&id=${id}`
  elLink.classList.add('a-link')
  elImg.src = imgSrc
  elImg.alt = title
  elTitle.textContent = product.caption
  elPrice.innerHTML = `<b>${price} грн</b>`

  Object.entries(attributes).forEach(([key, value]) => {
    const elLabel = document.createElement('label')
    elLabel.textContent = value
    elLabel.setAttribute('for', `${key}-${value}`)
    elDivAttributes.appendChild(elLabel)
  })

  elDivProduct.classList.add('wrap-product')
  elDivWrapA.classList.add('wrap-a')
  elDivImg.classList.add('wrap-img')
  elDivTitle.classList.add('wrap-h3')
  elDivPrice.classList.add('wrap-p')
  elDivRow.classList.add('row')
  elDivNew.classList.add('new_')
  elDivButtonCart.classList.add('cart')
  elDivButtonFavorite.classList.add('favorite')
  elDivButtonCompare.classList.add('compare')
  elButtonCart.classList.add('"')
  elButtonFavorite.classList.add('"')
  elButtonCompare.classList.add('"')

  elDivProduct.appendChild(elDivWrapA)
  elDivWrapA.appendChild(elLink)
  elLink.appendChild(elDivImg)
  elDivImg.appendChild(elImg)
  elLink.appendChild(elDivTitle)
  elDivTitle.appendChild(elTitle)
  elDivProduct.appendChild(elDivAttributes)
  elDivProduct.appendChild(elDivPrice)
  elDivPrice.appendChild(elPrice)
  elDivProduct.appendChild(elDivRow)

  elDivRow.appendChild(elDivButtonCart)
  elDivButtonCart.appendChild(elButtonCart)
  elDivRow.appendChild(elDivButtonFavorite)
  elDivButtonFavorite.appendChild(elButtonFavorite)
  elDivRow.appendChild(elDivButtonCompare)
  elDivButtonCompare.appendChild(elButtonCompare)
  elDivProduct.appendChild(elDivNew)

  return elDivProduct
}
