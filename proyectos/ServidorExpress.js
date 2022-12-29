const fs = require ("fs")

class ProductManager {
    constructor(filepath){
        this.filepath = filepath;
    }

    getProducts(){
        const products = fs.readFileSync(this.filepath, 'utf-8')
        return JSON.parse(products)
    }
}

module.exports = ProductManager

const newProducto = new ProductManager('./database/productos.JSON');
console.log(newProducto.getProducts());