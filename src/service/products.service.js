
import { productRepository } from '../repositories/product.repository.js';

class ProductService {
    async getAllProducts() {
        const products = await productRepository.getAllProducts();
        return products.map(product => product.toPOJO());
    }
    
    async getProductById(productId) {
        if (isNaN(productId) || productId <= 0) {
            throw new Error('El ID del producto debe ser un número positivo.');
        }
        const product = await productRepository.getProductById(productId);
        return product.toPOJO(); 
    }

    async addProduct(productData) {
        if (!productData.category || !productData.object || !productData.title || !productData.description || !productData.code || !productData.stock || !productData.status || !productData.price) {
            throw new Error('Los datos de los productos son obligatorios.');
        }
        return await productRepository.addProduct(productData);
    }

    async updateProduct(productId, updatedProductData) {
        const existingProduct = await productRepository.getProductById(productId);
        if (!existingProduct) {
            throw new Error(`No se encontró un producto.`);
        }
        return await productRepository.updateProduct(productId, updatedProductData);
    }

    async deleteProduct(productId) {
        const existingProduct = await productRepository.getProductById(productId);
        if (!existingProduct) {
            throw new Error(`No se encontró un producto.`);
        }
        return await productRepository.deleteProduct(productId);
    }
}
export const producsService = new ProductService();