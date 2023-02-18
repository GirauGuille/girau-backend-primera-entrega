class ProductManager {
    #codeGenerator(codeLength = 15) {
        const numeros = "0123456789";
        const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numYLetras = numeros + letras;
        let code = "";
        for (let i = 0; i < codeLength; i++) {
        const random = Math.floor(Math.random() * numYLetras.length);
        code += numYLetras.charAt(random);
        }
        return code;
    }

    #idGenerator() {
        const id =
        this.products.length === 0
            ? 1
            : this.products[this.products.length - 1].id + 1;
        return id;
    }
    
    constructor() {
        this.products = [];
    }
    
    addProduct(title, description, price, thumbnail, stock) {
        const product = {
            id: this.#idGenerator(),
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: this.#codeGenerator(),
            stock: stock,
        };
    
        try {
        if (!title || !description || !price || !thumbnail || !stock) {
            throw new Error(
            `Por favor complete todos los parametros requeridos del producto`
            );
        } else {
            this.products.push(product);
        }
        } catch (error) {
        console.log(`Problema al agregar producto: ${error.message}`);
        }
    }
    
    getProducts() {
        try {
        console.log(this.products);
        } catch (error) {
        console.log(`Error obteniendo todos los productos: ${error.message}`);
        }
    }

    getProductById(id) {
        try {
        const idProduct = this.products.filter(product => product.id === id);
        if (idProduct.length > 0) {
            console.log(idProduct[0]);
        } else throw new Error(`Not found`);
        } catch (error) {
        console.log(
            `Problema al buscar producto con el id ${id}: ${error.message}`
        );
        }
    }
}

const girau = new ProductManager();

girau.getProducts();
girau.addProduct(
    "prueba 2",
    "esta es una prueba",
    500,
    "sin imagen",
    50
);
girau.getProductById();