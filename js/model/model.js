const model = {
  products: [],
  exchangeRate: 42,

  convertPricesToUAH(products) {
    products.forEach(product => {
      product.price *= this.exchangeRate
    })
    return products
  },

  computedProducts() {
    const searched = searcher.search(this.products)
    const sorted = sorter.sort(searched)
    const priced = pricer.price(sorted)
    const paginated = paginator.paginate(priced)
    return paginated
  },
}
