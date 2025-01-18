const search = {
  findProductsByQuery(query, products) {
    return this.findProductsByQueries(this.queryToArray(query), products)
  },

  queryToArray(query) {
    return query
      .trim()
      .split(' ')
      .filter(q => q !== '')
  },

  findProductsByQueries(queries, products) {
    let findedProducts = []
    queries.forEach(query => {
      const result = this.helper(query, products)
      findedProducts.push(result)
    })
    return this.removeClones(findedProducts.flat())
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

  compareWords(a, b) {
    b = String(b)
    return b.toLowerCase().includes(a.toLowerCase())
  },

  removeClones(arr) {
    return Array.from(new Set(arr))
  },
}
