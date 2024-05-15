const express=require('express');
const { createUser, getUser, getUsers, updateUser, deleteUser } = require('../controllers/User');
const router=express.Router();

router.post('/',createUser)
router.get('/',getUsers)
router.get('/:id',getUser) 
router.patch('/:id',updateUser) 
router.delete('/:id',deleteUser) 

module.exports=router;