const express = require("express")
const app= express()
app.use(express.json());
const multer = require('multer');
Products=require('./model/product')
Carts=require('./model/cart')



const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ProductStore', {useNewUrlParser: true,  useUnifiedTopology: true });

app.post('/product',async (req,res)=>
{   console.log(req.body)
    const newProd= new Products({
                                    productName:req.body.productName,
                                    productImage: req.body.productImage,
                                    productQuantity: req.body.productQuantity,
                                    productDescription: req.body.productDescription,
                                    unitPrice:req.body.unitPrice
                                } )
 try{
       const nprod=await newProd.save()
        res.status(201).json(nprod)  
    }
catch(err)
 {  res.status(400).json({msg:err})  }
})

app.get('/product',async (req,res)=>
{
    try{
        const prod = await Products.find()
        res.json(prod)
    }
    catch(err)
    {
        res.status(500).send('Database error')
    }
})

app.get('/cart',async (req,res)=>{
    try{
        const prod = await Carts.find()
        res.json(prod)
    }
    catch(err)
    {
        res.status(500).send('Database error')
    }
})

app.post('/cart',async (req,res)=>
{   console.log(req.body)
    const newProd= new Carts({
                                    productName:req.body.productName,
                                    productImage: req.body.productImage,
                                    productQuantity: req.body.productQuantity,
                                    unitPrice:req.body.unitPrice
                                } )
 try{
       const nprod=await newProd.save()
        res.status(201).json(nprod)  
    }
catch(err)
 {  res.status(400).json({msg:err})  }
})

app.patch('./cart/:id', async (req,res)=>
{
    try{
        const id=req.params.id
        const update=req.body
        const result =  await Carts.findByIdAndUpdate(id,update)
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})
app.listen('5000',()=>
{
    console.log("Server up and running")
})
