// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html')
    }
  }
})
