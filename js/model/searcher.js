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

// module.exports = searcher
