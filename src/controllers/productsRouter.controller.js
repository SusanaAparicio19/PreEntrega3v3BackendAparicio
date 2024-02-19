
import { productService } from '../services/products.service.js'

const productService = new productService();

export async function getAllProducts(req, res) {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener todos los productos');
    }
}

export async function getProductById(req, res) {
    const id = parseInt(req.params.pid);    
    try {
        const product = await productService.getProductById(id);
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error al recibir el producto con Id ${id}`);
    }
}

export async function addProduct(req, res) {
    const { category, object, title, description, code, stock, status, price } = req.body;
    try {
        const newProduct = await productService.addProduct({
            category,
            object,
            title,
            description,
            code,
            stock,
            status,
            price,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al agregar el producto');
    }
}

export async function updateProduct(req, res) {
    const id = parseInt(req.params.pid);    
    try {
        const { category, object, title, description, code, stock, status, price } = req.body;
        const updatedProduct = await productService.updateProduct(id, { category, object, title, description, code, stock, status, price });
        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error al editar el producto con Id ${id}`);
    }
}

export async function deleteProduct(req, res) {
    const id = parseInt(req.params.pid);    
    try {
        await productService.deleteProduct(id);
        res.status(204).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error al eliminar el producto con Id ${id}`);
    }
}

export async function updateProductById(req, res) {
    const id = parseInt(req.params.pid);
    try {
        const { category, object, title, description, code, stock, status, price } = req.body;
        const updatedProduct = await productService.updateProduct(id, { category, object, title, description, code, stock, status, price });
        res.json(updatedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).send(`Error al actualizar el producto con Id ${id}`);
    }
}

