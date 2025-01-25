const API_ENDPOINT = 'https://web-app.click/pc-shop/api/v0/'
const URL_PRODUCTS = API_ENDPOINT + 'products'

const api = {
  async fetchProducts() {
    const response = await fetch(URL_PRODUCTS)
    const products = await response.json()
    return products.payload
  },

  async getProducts() {
    const products = await this.fetchProducts()
    return products
  },
}
