const filter = {
  createFilterFromProducts(products) {
    const attributesMap = {}

    products.forEach(product => {
      const { attributes } = product
      for (const key in attributes) {
        if (!attributesMap[key]) {
          attributesMap[key] = new Set()
        }
        let value = attributes[key]
        attributesMap[key].add(value)
      }
    })

    const filter = {}
    for (const key in attributesMap) {
      filter[key] = Array.from(attributesMap[key]).sort()
    }

    return filter
  },
}
