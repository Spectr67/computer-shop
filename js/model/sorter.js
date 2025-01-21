const sorter = {
  sortingType: 'byCaptionASC',

  sort(products) {
    return {
      byPriceASC(products) {
        return products.toSorted((a, b) => a.price - b.price)
      },
      byPriceDESC(products) {
        return products.toSorted((a, b) => b.price - a.price)
      },
      byCaptionASC(products) {
        return products.toSorted((a, b) => a.caption.localeCompare(b.caption))
      },
      byCaptionDESC(products) {
        return products.toSorted((a, b) => b.caption.localeCompare(a.caption))
      },
    }[this.sortingType](products)
  },
}

module.exports = sorter
// console.log(sorter.sort([{ price: 3 }, { price: 1 }, { price: 2 }]))
