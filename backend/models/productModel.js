import mongoose from 'mongoose'

// schema for individual user reviews
const reviewSchema = mongoose.Schema({
    name: {type: String, required: true}, // embedded object docs: https://docs.mongodb.com/realm/node/embedded-objects
    rating: {type: Number, required: true},
    comment: {type: String, required: true},
},{
    timestamps: true
})

const productSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectID, // to know which admin/user referred to which product
        required: true
        ref: 'User' // establishes relationship between Product and User
    }
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
        default: 0
    },
    numReviews:{
        type: Number,
        required: true,
        default:0
    },
    price:{
        type: Number,
        required: true,
        default:0
    },
    countInStock:{
        type: Number,
        required: true,
        default:0
    },
    reviews: [reviewSchema]
}, {
    timestamps: true // created at: & updated at:
})

const Product = mongoose.model('Product', productSchema) // making a model called 'Product' from the productSchema

export default Product