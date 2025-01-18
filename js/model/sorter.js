const sorter = {
  sortingType: 'byPriceASC',

  sort(products) {
    return {
      byPriceASC(products) {
        return products.toSorted((a, b) => a.price - b.price)
      },
      byPriceDESC(products) {
        return products.toSorted((a, b) => b.price - a.price)
      },
      byNameASC(products) {
        return products.toSorted((a, b) => a.caption.localeCompare(b.caption))
      },
      byNameDESC(products) {
        return products.toSorted((a, b) => b.caption.localeCompare(a.caption))
      },
    }[this.sortingType](products)
  },
}

// console.log(sorter.sort([{ price: 3 }, { price: 1 }, { price: 2 }]))
