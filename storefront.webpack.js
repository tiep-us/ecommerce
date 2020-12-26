// storefront.webpack.js
// dev Pham.xuan.tiep
// tiep@

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
      './html/ShippingCalculator.html': path.resolve(__dirname, 'template/js/custom-js/html/ShippingCalculator.html'),
      './html/LoginBlock.html': path.resolve(__dirname, 'template/js/custom-js/html/LoginBlock.html'),
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/html/EcCheckout.html'),
      './html/PaymentMethods.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentMethods.html'),
      './html/ProductVariations.html': path.resolve(__dirname, 'template/js/custom-js/html/ProductVariations.html'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/html/TheProduct.html'),
      './html/AShare.html': path.resolve(__dirname, 'template/js/custom-js/html/AShare.html'),
      './html/AddressForm.html': path.resolve(__dirname, 'template/js/custom-js/html/AddressForm.html')
    }
  }
})
