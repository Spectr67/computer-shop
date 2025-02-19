const model = {
  products: [],
  exchangeRate: 42,

  convertPricesToUAH() {
    this.products.forEach(product => {
      product.price *= this.exchangeRate
    })
  },

  computedProducts() {
    const searched = searcher.search(this.products)
    pricer.updatePriceRange(searched)
    const attributed = attributer.attributering(searched)
    const priced = pricer.price(attributed)
    const sorted = sorter.sort(priced)
    const paginated = paginator.paginate(sorted)
    return paginated
  },
}
