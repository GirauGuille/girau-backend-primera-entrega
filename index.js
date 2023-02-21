class ProductManager {
    constructor() {
        this.products = [];
        this._id = 0;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log('Error: Todos los campos son obligatorios');
            return;
        }

        if (this.products.some((p) => p.code === product.code)) {
            console.log('Error: El código del producto ya existe');
            return;
        }

        this._id++;
        const newProduct = {
            id: this._id,
            ...product
        };
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.log('Error: Not found');
        }
    }
}


const products1 = new ProductManager();

console.log("product1 (Object):",products1);
products1.addProduct({ title: 'Mouse', description: 'MOUSE LOGITECH G502 WIRELESS GAMING LIGHTSPEED 910-005566', price: 32000, thumbnail: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g502-wireless-gaming-lightspeed-910005566-0.jpg', code: 1, stock: 10 });
console.log("product1 (getProducts):",products1.getProducts());
