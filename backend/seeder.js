// not connected to the server - completely separate function
// seeder script TO POPULATE DB WITH TEST DATA FROM users.js and products.js

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import conectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => { // async since related to DB
    try{
        await Order.deleteMany() // clearing all collections completely using this mongoose method i.e. wipes out DB
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id // first item in users.js
        
        const sampleProducts = products.map(product => { // adding amdin user to each product
            return {...product, user: adminUser} // returns all of the data in each product i.e. ...(spread operator) and appending 'user' field
        } )

        await Product.insertMany(sampleProducts) // now these products are inserted  into DB using mongoose method

        console.log('Data imported.')
        
        process.exit()
    }
    catch(error){
        console.error( `error`)
        process.exit(1)
    }
}

const destroyData = async() => {
    try{
        await Order.deleteMany() // clearing all collections completely using this mongoose method
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed.')

        process.exit()
    }
    catch(error){
        console.error( `error`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d'){ // if arguments in terminal is 'node backend/seeder -d' or 'npm run data:import'
    destroyData()
}
else{
    importData()
}
