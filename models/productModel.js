// models/productModel.js

class Product {
    constructor(id, name, price, qty, createdate) {
        this.id = id
        this.name = name
        this.price = price
        this.qty = qty
        this.createdate = createdate
    }
}

module.exports = Product