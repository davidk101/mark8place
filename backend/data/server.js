const express = require('express'); // bringing in express.js using common.js
cosnt products = requrie('./data/products')
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

app.listen(5000, console.log('server running on port 5000 '))