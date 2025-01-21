const searcher = {
  query: '',

  search(products) {
    return this.findProductsByQueries(this.queryToArray(this.query), products)
  },

  findProductsByQueries(queries, products) {
    let findedProducts = []
    queries.forEach(query => {
      const result = this.helper(query, products)
      findedProducts.push(result)
    })
    return this.removeClones(findedProducts.flat())
  },

  queryToArray(query) {
    return query.trim().split(' ')
    // .filter(q => q !== '')
  },

  compareWords(a, b) {
    return String(b).toLowerCase().includes(a.toLowerCase())
  },

  removeClones(array) {
    return Array.from(new Set(array))
  },

  helper(query, products) {
    return products.filter(
      product =>
        this.compareWords(query, product.price) ||
        this.compareWords(query, product.caption) ||
        this.compareWords(query, product.description) ||
        this.compareWords(query, product.category) ||
        this.compareWords(query, product.attributes['Тип ОЗУ']) ||
        this.compareWords(query, product.attributes['Тип накопителя']) ||
        this.compareWords(query, product.attributes['Процессор']) ||
        this.compareWords(query, product.attributes['Количество ядер']) ||
        this.compareWords(query, product.attributes['Объем накопителя']) ||
        this.compareWords(query, product.attributes['Блок питания']) ||
        this.compareWords(query, product.attributes['Объем ОЗУ']) ||
        this.compareWords(query, product.attributes['Частота процессора']) ||
        this.compareWords(query, product.attributes['Частота ОЗУ']) ||
        this.compareWords(query, product.attributes['Материнская плата'])
    )
  },
}

module.exports = searcher
// const products = [
//   {
//     id: 13,
//     price: 458,
//     caption: 'Геймерский ПК Solaris-I',
//     description: 'Для геймеров',
//     category: 'Computers',
//     attributes: {
//       'Тип ОЗУ': 'DDR4',
//       'Тип накопителя': 'SSD',
//       Процессор: 'AMD',
//       'Количество ядер': '4',
//       'Объем накопителя': '240Gb',
//       'Блок питания': '500W',
//       'Объем ОЗУ': '8Gb',
//       'Частота процессора': '3.8Ghz',
//       'Частота ОЗУ': '3200Mhz',
//       'Материнская плата': 'Asus',
//     },
//     photos: [
//       '224083634.jpg',
//       '2022091909564069.jpg',
//       '20190118063031997.jpg',
//       '20220704220631752.jpg',
//       '20210615191252596.jpg',
//       '20171130053735822.jpg',
//       '20210608213852703.jpg',
//       '20211101203247640.jpg',
//       '20161007113734330.jpg',
//     ],
//   },
//   {
//     id: 14,
//     price: 311,
//     caption: 'Геймеский ПК Solaris-S',
//     description: 'Для геймеов',
//     category: 'Computers',
//     attributes: {
//       'Объем накопителя': '250Gb',
//       'Тип накопителя': 'SSD',
//       'Материнская плата': 'Asus',
//       Процессор: 'AMD',
//       'Количество ядер': '6',
//       'Частота процессора': '3.7 Ghz',
//       'Объем ОЗУ': '16Gb',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Блок питания': '500W',
//     },
//     photos: [
//       '111111111.jpg',
//       '20221001191005189.jpg',
//       '20201101223224435.jpg',
//       '20200915225342302.jpg',
//       '20200119204811383.jpg',
//       '20161007113734330.jpg',
//       '20190628013756505.jpg',
//     ],
//   },
//   {
//     id: 15,
//     price: 429,
//     caption: 'Геймерский ПК Solaris-L',
//     description: 'Для геймеров',
//     category: 'Computers',
//     attributes: {
//       'Частота процессора': '3.6 Ghz',
//       'Объем ОЗУ': '8Gb',
//       'Частота ОЗУ': '2666Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Тип накопителя': 'SSD',
//       'Объем накопителя': '240Gb',
//       'Блок питания': '500W',
//       'Материнская плата': 'Gigabyte',
//       Процессор: 'Intel',
//       'Количество ядер': '4',
//     },
//     photos: [
//       '254822474.jpg',
//       '20220908221446972.jpg',
//       '20211024215244839.jpg',
//       '20201216205515595.jpg',
//       '2021092821452396.jpg',
//       '20171130053735822.jpg',
//       '20130406222224684.jpg',
//       '20220615214338724.jpg',
//     ],
//   },
//   {
//     id: 16,
//     price: 612,
//     caption: 'Геймерский ПК Solaris-14',
//     description: 'Для геймеров',
//     category: 'Computers',
//     attributes: {
//       'Объем ОЗУ': '16Gb',
//       'Частота ОЗУ': '3200Mhz',
//       'Тип ОЗУ': 'DDR4',
//       'Блок питания': '600W',
//       'Тип накопителя': 'SSD',
//       'Объем накопителя': '500Gb',
//       'Материнская плата': 'ASRock',
//     },
//     photos: [
//       '142286125.jpg',
//       '2022100119211163.jpg',
//       '20220608171027319.jpg',
//       '20220213174324124.jpg',
//       '20220705210526947.jpg',
//       '20191002054158954.jpg',
//       '20210219192433116.jpg',
//       '20210205214819551.jpg',
//     ],
//   },
// ]

// searcher.query = '250Gb геймеров'
// console.log(products.length)
// console.log(searcher.search(products).length)
