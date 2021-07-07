module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: 'PixivQuiz',
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: process.env.VUE_APP_API_BASE_URL
  }
}
