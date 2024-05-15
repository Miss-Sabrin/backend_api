const express=require('express');
const { creatProduct,  getProduct, deleteProduct, updateProduct, getAllProducts, fetchProducts, createProduct } = require('../controllers/products');

const router=express.Router();

router.post("/product/create", createProduct);
router.get("/product", fetchProducts);
 router.get('/product/:id',getProduct) 

router.patch('/product/:id',updateProduct) 
router.delete('/product/:id',deleteProduct) 





module.exports=router