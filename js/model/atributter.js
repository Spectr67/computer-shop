const attributer = {
  attribute: '',
  attributeValue: '',
  settedAtributes: [],

  attributering(products) {
    return products.filter(
      product =>
        product.attributes &&
        product.attributes[this.attribute] === this.attributeValue
    )
  },

  addAttribute(attr) {
    this.attribute = attr
  },

  addAttributeValue(value) {
    this.attributeValue = value
  },

  aaddAttributeToSetted() {
    const attributeAndValue = [this.addAttribute, this.attributeValue]
    this.settedAtributes.push(attributeAndValue)
  },

  clearAttribute(attribute) {
    this.settedAtributes = this.settedAtributes.filter(
      attr => attr[0] !== attribute
    )
  },

  clearAttributeValue() {
    this.attributeValue = ''
  },

  clearAllAttributes() {
    this.settedAtributes = []
  },

  getSettedAtributes() {
    return this.settedAtributes
  },
}

// attributer.addAttribute('Тип накопителя')
// attributer.addAttribute('Тип ОЗУ')
// attributer.addAttributeValue('SSD')
// attributer.addAttributeValue('DDR3')
// const result = attributer.getSettedAttributes
// console.log(result)

// const filteredProducts = attributer.attributering([
//   {
//     id: 1,
//     caption: 'Геймерский ПК Solaris-I',
//     attributes: {
//       'Тип ОЗУ': 'DDR4',
//       'Тип накопителя': 'SSD',
//       Процессор: 'AMD',
//     },
//   },
//   {
//     id: 2,
//     caption: 'Геймерский ПК Solaris-S',
//     attributes: {
//       'Тип ОЗУ': 'DDR4',
//       'Тип накопителя': 'HDD',
//       Процессор: 'Intel',
//     },
//   },
//   {
//     id: 3,
//     caption: 'Геймерский ПК Solaris-L',
//     attributes: {
//       'Тип ОЗУ': 'DDR3',
//       'Тип накопителя': 'SSD',
//       Процессор: 'AMD',
//     },
//   },
// ])
