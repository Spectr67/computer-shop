const model = {
  products: products,
  favorite: [],
  cart: [],
  comparison: [],

  searchProducts() {
    if (this.query === '') return this.products
    return searcher.search(this.query, this.products)
  },
}

// push pop shift unshift sort reverse splice

// чистая функция, которая не читает из глобального состояни
// и не пишет в него
