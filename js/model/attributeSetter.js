const attributer = {
  attribute: '',
  attributeValue: '',
  settedAtributes: [],

  attributering(products) {
    // TODO: проходишь по товарам и ищешь только те, которые есть в массиве
    return products.filter(
      product =>
        product.attributes &&
        product.attributes[this.attribute] === this.attributeValue
    )
  },

  setAttributeName(attr) {
    // attributeName
    this.attribute = attr
  },

  setAttributeValue(value) {
    this.attributeValue = value
  },

  addAttributeToSetted() {
    const attributeAndValue = { [this.attribute]: this.attributeValue }
    this.settedAtributes.push(attributeAndValue)
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
