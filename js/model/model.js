const model = {
  products: [],
  exchangeRate: 42,

  convertPricesToUAH() {
    this.products.forEach(product => {
      product.price *= this.exchangeRate
    })
  },
  normalizeProductAttributes() {
    return this.products.map(product => ({
      ...product,
      attributes: Object.fromEntries(
        Object.entries(product.attributes).map(([key, value]) => [
          key,
          value.replaceAll(',', '').replaceAll(' ', ''),
        ])
      ),
    }))
  },

  computedProducts() {
    const searched = searcher.search(this.products)

    const attributed = attributer.attributering(searched)
    console.log(attributed)
    const priced = pricer.price(attributed)
    console.log(priced)
    const sorted = sorter.sort(priced)
    const paginated = paginator.paginate(sorted)
    return paginated
  },
}
