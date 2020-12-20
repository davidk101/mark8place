import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true // created at: & updated at:
})

const User = mongoose.model('User', userSchema) // making a model called 'User' from the userSchema

export default User