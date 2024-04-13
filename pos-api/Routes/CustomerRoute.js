const express=require('express');

const CustomerController=require('../controller/CustomerController');

const veryfyUser=require('../middlewear/AuthMiddelwear');

const router=express.Router();

// router.post('/create',veryfyUser,CustomerController.create);
// router.get('/findById/:id',veryfyUser,CustomerController.findById);
// router.delete('/deleteById',veryfyUser,CustomerController.deleteById);
// router.get('/findAll',veryfyUser,CustomerController.findAll);

router.post('/create',CustomerController.create);
router.delete('/deleteById/:id',CustomerController.deleteById);
router.get('/findById/:id',CustomerController.findById);
router.put('/update/:id',CustomerController.update);
router.get('/findAll',CustomerController.findAll);

module.exports=router;