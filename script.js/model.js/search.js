function findProductsByQuery(query) {
  return findProductsByQueries(queryToArray(query), products)
}
function queryToArray(query) {
  return query
    .trim()
    .split(' ')
    .filter(q => q !== '')
}

function findProductsByQueries(queries, products) {
  let findedProducts = []
  queries.forEach(query => {
    const result = helper(query, products)
    findedProducts.push(result)
  })
  return removeClones(findedProducts.flat())
}

function helper(query, products) {
  return products.filter(
    product =>
      compareWords(query, product.price) ||
      compareWords(query, product.caption) ||
      compareWords(query, product.description) ||
      compareWords(query, product.category) ||
      compareWords(query, product.attributes['Тип ОЗУ']) ||
      compareWords(query, product.attributes['Тип накопителя']) ||
      compareWords(query, product.attributes['Процессор']) ||
      compareWords(query, product.attributes['Количество ядер']) ||
      compareWords(query, product.attributes['Объем накопителя']) ||
      compareWords(query, product.attributes['Блок питания']) ||
      compareWords(query, product.attributes['Объем ОЗУ']) ||
      compareWords(query, product.attributes['Частота процессора']) ||
      compareWords(query, product.attributes['Частота ОЗУ']) ||
      compareWords(query, product.attributes['Материнская плата'])
  )
}

function compareWords(a, b) {
  b = String(b)
  return b.toLowerCase().includes(a.toLowerCase())
}

const removeClones = arr => Array.from(new Set(arr))
