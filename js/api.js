const API_ENDPOINT = 'https://pc-shop.web-app.click/api/v0/'
const URL_PRODUCTS = API_ENDPOINT + 'products'
const URL_FAVORITES = API_ENDPOINT + 'favorites'
const URL_CARTS = API_ENDPOINT + 'carts'
const URL_COMPARE = API_ENDPOINT + 'compare'

const api = {
  getType: URL_COMPARE,

  async sendRequest(url, method = 'GET', payload = null) {
    const options = { method, credentials: 'include' }

    if (payload) {
      options.headers = { 'content-type': 'application/json' }
      options.body = JSON.stringify(payload)
    }

    const resp = await fetch(url, options)
    const text = await resp.text()

    if (text) {
      const json = JSON.parse(text)
      console.log(json)
      return json.payload
    }
  },

  async getSomething() {
    return await this.sendRequest(this.getType)
  },

  async postSomething(product) {
    return await this.sendRequest(this.getType, 'POST', product)
  },

  async deleteSomethingById(id) {
    await this.sendRequest(this.getType + '/' + id, 'DELETE')
  },
}

// const productID = 3
// await api.deleteSomethingById(URL_COMPARE, productID)

const url0 = 'https://pc-shop.web-app.click/api/v0/auth'

const url1 = 'https://pc-shop.web-app.click/api/v0/customers/3/carts'

api.sendRequest(url1)
