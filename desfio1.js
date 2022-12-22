class ProductManager{
    products;
    static id = 1;
    constructor (){
        this.products = [];
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        ProductManager.id++;
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id:ProductManager.id,
        };
        
        const checkInCart = products.find((element) => element.code === product.code);
        if (checkInCart) {
            console.log("Error");
       } else {
            this.products.push(product)
            ProductManager.id++
        }

        if (!product.title ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock ||
            !product.id) {
                console.log("verificar campos");
                throw new Error("Los campos estan vacios")
            
        }
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id){
        const search = this.products.find (product => product.id === id);
        if(search === undefined){
            return 'Not found';
         }else{
            console.log(search);
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

