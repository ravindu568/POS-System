const express=require('express');

const ProductController=require('../controller/ProductController');

const veryfyUser=require('../middlewear/AuthMiddelwear');

const router=express.Router();

router.post('/create',veryfyUser,ProductController.create);
router.get('/findById',veryfyUser,ProductController.findById);
router.delete('/deleteById',veryfyUser,ProductController.deleteById);
router.put('/update',veryfyUser,ProductController.update);
router.get('/findAll',veryfyUser,ProductController.findAll);

module.exports=router;
