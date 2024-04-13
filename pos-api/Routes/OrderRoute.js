const express=require('express');

const OrderController=require('../controller/OrderController');

const veryfyUser=require('../middlewear/AuthMiddelwear');

const router=express.Router();

router.post('/create',veryfyUser,OrderController.create);
router.get('/findById',veryfyUser,OrderController.findById);
router.delete('/deleteById',veryfyUser,OrderController.deleteById);
router.put('/update',veryfyUser,OrderController.update);
router.get('/findAll',veryfyUser,OrderController.findAll);

module.exports=router;