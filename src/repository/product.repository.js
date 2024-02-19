import { productDao } from '../dao/product.dao.js';

class ProductRepository {
    async getAllProducts() {
        return await productDao .getAllProducts();
    }
    
    async getProductById(productId) {
        return await productDao .getProductById(productId);
    }

    async addProduct(productData) {
        return await productDao .addProduct(productData);
    }

    async updateProduct(productId, updatedProductData) {
        return await productDao .updateProduct(productId, updatedProductData);
    }

    async deleteProduct(productId) {
        return await productDao .deleteProduct(productId);
    }
}

export const productRepository = new ProductRepository()
