const normalized = {
  normalizeProducts(products) {
    return products.map(product => ({
      ...product,
      attributes: Object.fromEntries(
        Object.entries(product.attributes)
          .map(([key, value]) => [
            key,
            value.replaceAll(',', '').replaceAll(' ', ''),
          ])
          .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      ),
    }))
  },
}
