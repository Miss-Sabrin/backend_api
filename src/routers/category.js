const express=require('express');
const { createCategory, getCategories,  getCategory, deleteCategory, updateCategory } = require('../controllers/category');
const router=express.Router();

router.post('/create',createCategory);
 router.get('/',getCategories);
router.get('/category/:id',getCategory);
router.delete('/category/:id',deleteCategory);
router.patch('/category/:id',updateCategory);

module.exports=router;