const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
// const db = require('../config/index');
// const { routes } = require('./userController');
const Products  = require('../model/products');
const products = new Products();


routes.get('/products', (req, res) => {
    products.fetchProduct(req, res);
});

routes.get('/product/:id', (req,res) => {
    Products.fetchproduct(req, res);
});

routes.post('/product', bodyParser.json(), (req, res) => {
    Products.addProduct(req, res);
});

routes.put('/product/:id', bodyParser.json(), (req, res) => {
    Products.updateProduct(req, res);
});

routes.delete('/product/:id', (req, res) => {
    Products.deleteProduct(req, res);
});

module.exports = {
    express,
    routes
}