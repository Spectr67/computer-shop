const api = {
  async fetchProducts() {
    const response = await fetch(
      'https://web-app.click/pc-shop/api/v0/products'
    )
    const products = await response.json()
    return products
  },
}
