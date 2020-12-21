import express from 'express' // bringing in express.js using ESJS
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

//const express = require('express'); // bringing in express.js using common.js
//const dotenv = require('dotenv');
//const products = require('./data/products');

dotenv.config()

connectDB()

const app = express() // initialize express.js

app.get('/', (req,res) =>{ // triggered when GET request is received
    res.send('API is runnning')
})

app.use('/api/products', productRoutes) // anything that goes to the link should point to 'productRoutes'

app.use(notFound) // middleware called

app.use(errorHandler) // middleware called

const PORT = process.env.PORT || 5000 // uses PORT 5000 if PORT value not in .env file

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}` ))