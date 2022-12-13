class ProductManager{
    products;
    constructor (){
        this.products = [];
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        if(
            title === undefined ||
            description === undefined ||
            price === undefined ||
            thumbnail === undefined ||
            code === undefined ||
            stock === undefined
        ){
            return console.log("Todos los campos son obligatorios");
        }

        const validacion = this.products.find ((product)=> product.code === code);
        if (validacion) {
            return console.log("El producto ya existe");           
        }else{
            this.products.push(product);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id){
        const search = this.products.find (product => product.id === id);
        if(product === undefined){
            return 'Not found';
        }
    }
}



const productos = new ProductManager();
productos.addProduct(
    "Remera",
    "Remera Blanca",
    1000,
    "imagen",
    "1234",
    10
);
productos.addProduct(
    "Pantalon",
    "Patalon negro",
    2000,
    "imagen",
    "12345",
    15
);

console.log(productos.getProducts());

console.log(productos.getProductsById(1));

