const mongoose =require('mongoose')

const cartSchema= new mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productQuantity:{
        type:Number
    },
    unitPrice:{
        type:Number
    }
})

module.exports=mongoose.model('Carts',cartSchema)