const fs = require ('fs')

class ProductManager{
    products;
    static id = 1;
    constructor (path){
        this.products = [];
        this.path = path;
        this.products = this.readFile();
    }

    readFile(){
        try {
            const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
            return data;
        } catch (error) {
            return []
        }
    }

    writeData(data){
        let dataString = JSON.stringify(data);
        fs.writeFileSync(`./${this.path}`, dataString);
    }

    addProduct (title, description, price, thumbnail, code, stock) {
        let listadoProduct = this.readFile();
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

        const checkInCart = listadoProductproducts.find((element) => element.code === product.code);
/*         if (checkInCart) {
            console.log("Error");
       } else {
            this.products.push(product)
            ProductManager.id++
        } */

        if (!product.title ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock ||
            !product.id) {
                console.log("verificar campos");
                throw new Error("Los campos estan vacios")
            
        }else if (checkInCart) {
            console.log("ERROR- Favor de chequear la informacion nuevamente");
        } else {
            listadoProduct.id = listadoProduct.length > 0 ? listadoProduct[listadoProduct.length - 1]. id + 1 :1 ;
            listadoProduct.push(product)
            this.writeData(data)           
        }
    }

    getProducts() {
       // return this.products;
       try {
        const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
        return (data)
       } catch (error) {
        return []
        
       }
    }

    getProductsById(id){
        let listaProducto = this.readFile();
        const products = listaProducto

        const search = this.products.find (product => product.id === id);
        if(search === undefined){
            console.log("NOT FOUND");
         }else{
            return search;
         }
    }

    updateProduct(id,product){
        let data = this.readFile();
        if(data.find(product => product.id === id)){
            let prodDelete = data.filter(product => product.id!== id)
            product.id=id;
            prodDelete.push(product);
            this.writeData(prodDelete);
            return prodDelete;
        }else{
            console.log("No se encontraron productos con ese id");
        }
    }

    async deleteProduct (id){
        let productos = await  this.readFile()
        try {
            productos = productos.filter(producto => producto.id != id)
            this.writeData(productos)
        } catch (error) {
            console.log("Oops! Hay un error");
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

