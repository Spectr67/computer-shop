const attributer = {
  attribute: '',
  attributeValue: '',

  attributering(products) {
    return products.filter(
      product =>
        product.attributes &&
        product.attributes[this.attribute] === this.attributeValue
    )
  },
}

// attributer.attribute = 'Тип накопителя'
// attributer.attributeValue = 'SSD'

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
// ]);

// console.log(filteredProducts);
