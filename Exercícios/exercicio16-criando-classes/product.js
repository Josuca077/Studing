class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(stock){
        this.inStock += stock
    }
    calculateDiscount(discount){
        this.price *= ((100 - discount) / 100)
    }
}

const ipad = new Product("Ipad", "tablet da apple", 5000)

console.log(ipad)

ipad.addToStock(50)
ipad.calculateDiscount(10)

console.log(ipad)