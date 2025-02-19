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
    pricer.updatePriceRange(searched)
    // attributer.attributering(searched)
    const attributed = attributer.attributering(searched)
    const priced = pricer.price(attributed)
    const sorted = sorter.sort(priced)
    const paginated = paginator.paginate(sorted)
    return paginated
  },
}
