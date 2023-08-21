const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

// Import all model's objects
const { users } = require('../model/users');
// const Products = require('../model/products');

//========User's router===========
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
    users.fetchUsers(req, res);
});

routes.post('/register', bodyParser.json(), (req,res) => {
    users.register(req, res);
});

routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});

routes.patch('/user/:id', bodyParser.json(), (req,res) => {
    users.updateUser(req, res);
});
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res);
});

//========products router=========
// routes.get('/products', (req, res) => {
//     Products.fetchproducts(req, res);
// });

// routes.get('/product/:id', (req,res) => {
//     product.fetchproduct(req, res);
// });

// routes.post('/product', bodyParser.json(), (req, res) => {
//     product.addProduct(req, res);
// });

// routes.put('/product/:id', bodyParser.json(), (req, res) => {
//     product.updateProduct(req, res);
// });

// routes.delete('/product/:id', (req, res) => {
//     product.deleteProduct(req, res);
// });

module.exports = {
    express,
    routes
}