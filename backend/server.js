import expresss from 'express' // bringing in express.js using ESJS
import dotenv from 'dotenv'
import prodcuts from './data/products.js'

//const express = require('express'); // bringing in express.js using common.js
//const dotenv = require('dotenv');
//const products = require('./data/products');

dotenv.config()

const app = express() // initialize express.js

app.get('/', (req,res) =>{ // triggered when GET request is received
    res.send('API is runnning')
})

// GET all products as JSON
app.get('/api/products', (req,res) =>{ // triggered when GET request is received
    res.json(products)
})

// GET specific product based on _id as JSON
app.get('/api/products/:id', (req,res) =>{ // triggered when GET request is received
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000 // uses PORT 5000 if PORT value not in .env file

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}` ))