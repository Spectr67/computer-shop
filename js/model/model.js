const model = {
  products: products,
  favorite: [],
  cart: [],
  comparison: [],
  query: '',
  sortingType: 'ByPriceASC',

  searchProducts() {
    if (this.query === '') return this.products
    return search.findProductsByQuery(this.query, this.products)
  },

  sortProductsAToZ() {
    return this.products.sort((a, b) => a.caption.localeCompare(b.caption))
  },

  sortProductsZToA() {
    return this.products.sort((a, b) => b.caption.localeCompare(a.caption))
  },

  sortProductsByPriceHigh() {
    return this.products.sort((a, b) => a.price - b.price)
  },

  sortProductsByPriceLow() {
    return this.products.sort((a, b) => b.price - a.price)
  },
}
