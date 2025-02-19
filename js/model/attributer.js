const attributer = {
  attribute: '',
  attributeValue: '',
  settedAtributes: [],

  attributering(products) {
    return products.filter(product =>
      this.settedAtributes.every(({ name, value }) => {
        return value.includes(product.attributes?.[name])
      })
    )
  },

  clearAllAttributes() {
    this.settedAtributes = []
  },
}
