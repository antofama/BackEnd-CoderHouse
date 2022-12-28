class ProductManager{
    products;
    static id = 0;
    constructor(){
        this.products = [];    
    }

    addProduct(title, description, price, thumbnail, code, stock){
        ProductManager.id++;
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id,
        }
         const checkInCart = this.products.find((element)=> element.code === product.code);
         if (checkInCart == true) {
            console.log("ERROR- Por favor chequee la información");
            
         } else {
            this.products.push(product)
            ProductManager.id++
         }

         if (!title || !description || !price || !thumbnail ||!code ||!stock|| !id) {
            throw new Error('Todos los campos son obligatorios');
         }
    }

    getProducts() {
        return this.products;
     }

     getProductsById(id){
        const search = this.products.find ((product)=> product.id === id)

        if (search === undefined) {
            console.log("producto no encontrado");
        } else {
            console.log(search);              
        }

    }

}

const producto1 = new ProductManager("Mochila Lisboa","Mochila de cuero ecologico", 23000, "ruta imagen", 101, 3);
const producto2 = new ProductManager("Bag Malasia", "Bandolera con bolsillos dobles", 17300,"ruta imagen", 102, 2);

producto1.addProduct();
producto2.addProduct();
getProducts();
getProductsById();