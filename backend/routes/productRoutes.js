import express from 'express'
import asyncHandler from 'expressAsyncHandler' // npm middleware to handle exceptions
const router = express.Router()
import Product from '../models/productModel.js'

//@desc: fetch all products
//@route: GET /api/products
//@access: public

// GET all products as JSON
router.get('/', asyncHandler(sync (req,res) =>{ // triggered when GET request is received
    const products = await Product.find({}) // passing an empty object in find returns everything
    //Note: all mongoose methods return a promise so 'await' and 'async' methods are required
    res.json(products)
}))

//@desc: fetch single product
//@route: GET /api/products/:id
//@access: public

// GET specific product based on _id as JSON
router.get('/:id', asyncHandler(async (req,res) =>{ // triggered when GET request is received
    //const product = products.find((p) => p._id === req.params.id)
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    // triggered through formatted MongoDB object ID _id but not in the DB
    else{
        //res.status(404).json({message: 'Product not found'})
        res.status(404) // else, default to 500 error code
        throw new Error('Product not found')
    }
}))

export default router