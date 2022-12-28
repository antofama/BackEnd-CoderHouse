const fs = require('fs');


class ProductManager{
    constructor(path){
        this.path = path;
        this.products = this.readFile();
    }
    readFile(){
        try {
            const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
            
            return data;

        } catch (error) {
            
            return [];
        }
    }

    writeData(data){

        let dataString = JSON.stringify(data);
        fs.writeFileSync(`./${this.path}`, dataString);

    }

    addProducts(product){
        let listado = this.readFile();
        const checkInCart = listado.find((p)=> p.code === product.code)

        if (!product.title || !product.description || !product.price ||
            
            !product.thumbnail || !product.code || !product.stock) {
            
                throw new Error ('Todos los campos son obligatorios');

        }
    }
    
    getProducts(){
        try {
                    
            const data = JSON.parse(fs.readFileSync(`./${this.path}`, "utf-8"));
            
            return data;

        } catch (error) {
            return []
            
        }
    }

    getProductsById(id){
        let listaProductos = this.readFile();
        const products = listaProductos;

        const search = products.find((product)=> product.id === id);

        if (search == undefined) {
            console.log('Producto no encontrado');
            
        } else {
            
            return search;
        }
    }

    updateProducts(id, product){
        let data = this.readFile();
        
        if (data.find((product)=>product.id === id)) {
            let productDelete = data.filter((product)=> product.id !==id)
            product.id=id;
            productDelete.push(product);
            this.writeData(productDelete);
            return productDelete;
            
        } else {
            console.log('El producto que no existe');
        }
    }

    async deleteProduct(id){
        let productos = await this.readFile()

        try {
            productos = productos.filter((producto)=>producto.id !=id)
            this.writeData(productos)
        } catch (error) {
            console.log('Hubo un error');
        }
    }
    deleteAll(){
        this.writeFile([])
    }
}


const newProducto = new ProductManager('productos.JSON');

newProducto.addProducts(1,{
    title: "Mochila Lisboa",
    description: "Mochila de cuero ecologico",
    price: 22200,
    thumbnail: "ruta de imagen",
    code: 101,
    stock: 3
    
})

newProducto.addProducts(2,{
    title: "Bag Lisboa",
    description: "bandolera de cuero ecologico y doble bolsillo",
    price: 17000,
    thumbnail: "ruta de imagen",
    code: 102,
    stock: 5
})

newProducto(3,{
    title: "Billetera Mallorca",
    description: "Tarjetero de cuero ecologico",
    price: 10000,
    thumbnail: "ruta de imagen",
    code: 103,
    stock: 8
})


