const {API_BASE_URL} = process.env

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  env: {
    API_BASE_URL
  },
  devServer: {
    proxy: API_BASE_URL
  }
}
