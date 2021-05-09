const mongoose =require('mongoose')

const ProductSchema=new mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    productImage:{
        data: Buffer,
        contentType: String
    },
    productQuantity:{
        type:Number
    },
    productDescription:{
        type:String,
        required:true
    },
    unitPrice:{
        type:Number
    }
})

module.exports=mongoose.model('Product',ProductSchema)