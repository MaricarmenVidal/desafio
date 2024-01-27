 class ProductManager{

    constructor(){

        this.products= []

    }

    getProducts=()=>this.products
    

    addProduct(
        title,
        description,
        price,
        thumbnail,
        code,
        stock=20){

            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.error("Todos los campos son obligatorios.");
                return;
            }

            if (this.products.some(product => product.code === code)) {
                console.error("Ya existe un producto con el mismo código.");
                return;
            }
            
            const product={
                id:this.generarId(),
                title: title,
                description:description,
                price:price,
                thumbnail:thumbnail,
                code:code,
                stock:stock
            }
            this.products.push(product)
            console.log(`Producto agregado: ${product.title}`)
        }

    generarId() {
        let id = 0;
      
        if (this.products.length === 0) {
          id = 1;
        } else {
          id = this.products[this.products.length - 1].id + 1;
        }
      
        return id;
    }
      
    getProductbyId(id){
        const findId=this.products.find((product)=>product.id===id)
        if (findId){
                return findId
        }else{
            console.log("Resultado de buúsqueda: Producto no encontrado")
        }
    }
 
}


const productos= new ProductManager()
productos.addProduct("Laptop", "Gamer Intel Core I9 Rtx4090 32gb 2tb Ssd Rog Strix Scar 18 13° Gen 18", 15000, "https://falabella.scene7.com/is/image/FalabellaPE/882921521_1?wid=1500&hei=1500&qlt=70", 202401)
productos.addProduct("Laptop2", "Gamer Intel Core I9 Rtx4090 32gb 2tb Ssd Rog Strix Scar 18 13° Gen 18", 15000, "https://falabella.scene7.com/is/image/FalabellaPE/882921521_1?wid=1500&hei=1500&qlt=70", 202402)
productos.addProduct("Laptop3", "Gamer Intel Core I9 Rtx4090 32gb 2tb Ssd Rog Strix Scar 18 13° Gen 18", 15000, "https://falabella.scene7.com/is/image/FalabellaPE/882921521_1?wid=1500&hei=1500&qlt=70", 202403)

productos.addProduct("Laptop3", "Gamer Intel Core I9 Rtx4090 32gb 2tb Ssd Rog Strix Scar 18 13° Gen 18", 15000, "https://falabella.scene7.com/is/image/FalabellaPE/882921521_1?wid=1500&hei=1500&qlt=70", 202403)

const result=productos.getProducts()
console.log("result: ", result)

const foundProduct = productos.getProductbyId(1);


if (foundProduct) {
  console.log(`Resultado de búsqueda => Producto encontrado: ${foundProduct.title}`);
}