const products = require('../../products')
const searcher = require('./searcher')
const sorter = require('./sorter')

function computedProducts(products) {
  const searched = searcher.search(products)
  const sorted = sorter.sort(searched)
  return sorted
}

// let q = searcher.queryToArray('')

// console.log(q)

// const result = computedProducts(products)

// console.log(result.map(r => r.caption))

// let d = ('f', 'g', 'h')

// d
