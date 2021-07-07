module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: API_BASE_URL
  }
}
