// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html')
    }
  }
})
module.exports = () => ({
  resolve: {
    alias: {
      './html/TheCard.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCard.html')
    }
  }
})
