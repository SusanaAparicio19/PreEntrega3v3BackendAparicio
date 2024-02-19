import { cartsDao } from './carts.dao.js';

class CartsRepository {
    async createCart(newcartData) {
        return await cartsDao.createCart(newcartData);
    }

    async findCartById(cartId) {
        return await cartsDao.findCartById(cartId);
    }

    async findAllCarts() {
        return await cartsDao.findAllCarts();
    }

    async updateQuantityProdToCart(cartId, productId, newQuantity) {
        return await cartsDao.updateQuantityProdToCart(cartId, productId, newQuantity);
    }

    async addProductToCart(cartId, productId) {
        return await cartsDao.addProductToCart(cartId, productId);
    }

    async deleteCartById(cartId) {
        return await cartsDao.deleteCartById(cartId);
    }

    async deleteProductFromCart(cartId, productId) {
        return await cartsDao.deleteProductFromCart(cartId, productId);
    }
}

export const cartsRepository = new CartsRepository()