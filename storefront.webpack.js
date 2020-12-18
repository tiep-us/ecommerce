// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/AccountForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountForm.html'),
      './html/TheCart.html': path.resolve(__dirname, 'template/js/custom-js/html/TheCart.html'),
      './html/CartQuickview.html': path.resolve(__dirname, 'template/js/custom-js/html/CartQuickview.html'),
      './html/InstantSearch.html': path.resolve(__dirname, 'template/js/custom-js/html/InstantSearch.html'),
      './html/AccountAddresses.html': path.resolve(__dirname, 'template/js/custom-js/html/AccountAddresses.html'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/html/APrices.html'),
      './html/CartItem.html': path.resolve(__dirname, 'template/js/custom-js/html/CartItem.html'),
      './html/DiscountApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/DiscountApplier.html'),
      './html/InputPhone.html': path.resolve(__dirname, 'template/js/custom-js/html/InputPhone.html'),
      './html/InputZipCode.html': path.resolve(__dirname, 'template/js/custom-js/html/InputZipCode.html'),
      './html/AddressForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AddressForm.html')
    }
  }
})
