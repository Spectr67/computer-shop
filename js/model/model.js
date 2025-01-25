// const products = require('../../products')
// const searcher = require('./searcher')
// const sorter = require('./sorter')
// const pricer = require('./pricer')
// const paginator = require('./paginator')

const model = {
  products: [],

  computedProducts() {
    const searched = searcher.search(this.products)
    const sorted = sorter.sort(searched)
    const priced = pricer.price(sorted)
    const paginated = paginator.paginate(priced)
    return paginated
  },
}

// sorter.sortingType = 'byPriceDESC'
// pricer.minPrice = 300
// pricer.maxPrice = 900
// let q = searcher.queryToArray('')

// console.log(q)

// let result = computedProducts(products)

// console.log(result.map(r => r.price))
// paginator.currentPage = 1
// result = computedProducts(products)
// console.log(result.map(r => r.price))
// paginator.currentPage = paginator.totalPages - 1
// result = computedProducts(products)
// console.log(result.map(r => r.price))

// let d = ('f', 'g', 'h')

// d
