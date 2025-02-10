const attributer = {
  attribute: '',
  attributeValue: '',
  settedAtributes: [],

  attributering(products) {
    return products.filter(product =>
      this.settedAtributes.every(({ name, value }) => {
        const valuesArray = value.split(', ').map(v => v.trim())
        return valuesArray.includes(product.attributes?.[name])
      })
    )
  },

  clearAllAttributes() {
    this.settedAtributes = []
  },
}
