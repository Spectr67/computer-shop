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

    attributed = attributer.attributering(searched)

    const sorted = sorter.sort(attributed)
    const priced = pricer.price(sorted)
    const paginated = paginator.paginate(priced)
    return paginated
  },
}
