const model = {
  products: products,
  favorite: [],
  cart: [],
  comparison: [],

  searchProducts() {
    if (this.query === '') return this.products
    return searcher.search(this.query, this.products)
  },

  sortProducts(sortingType) {
    sorter.sortingType = sortingType
    this.products = sorter.sort(this.products)
    return this.products
  },

  paginationProducts(page, itemsPerPage) {
    paginator.currentPage = page
    paginator.productsPerPage = itemsPerPage
    this.products = paginator.paginate(page, itemsPerPage)
    return this.products
  },

  finalArrayProducts(query, page, itemsPerPage, sortingType) {
    let result = this.products

    if (query === '') return this.products
    searcher.search(query, this.products)

    if (sortingType) {
      sorter.sortingType = sortingType
      result = sorter.sort(this.products)
    }
    if ((page, itemsPerPage)) {
      paginator.currentPage = page
      paginator.productsPerPage = itemsPerPage
      result = paginator.paginate(page, itemsPerPage)
    }

    return result
  },
}

// push pop shift unshift sort reverse splice

// чистая функция, которая не читает из глобального состояни
// и не пишет в него
