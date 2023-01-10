const Cart = require('./models//cart.model')
const CartItem = require('./models/cart_item.modul')
const Product = require('./models/product.model')
const User = require('./models/user.model')

;(async () => {
    await Cart.sync()
    await CartItem.sync()
    await Product.sync()
    await User.sync()
})()
