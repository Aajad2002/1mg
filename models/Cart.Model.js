
const mongoose = require('mongoose')

const cartSchema = mongoose.Schema(
    {

        image: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true },
        title: { type: String, required: true },
        discount: { type: Number, required: true },
        category: { type: String, required: true },
        quantity: { type: Number, required: true },
        userID: { type: String }

    }
)
const CartModel = mongoose.model("carts", cartSchema);
module.exports = CartModel;