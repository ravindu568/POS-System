const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({

        date:{
            typr:Date,
            required:true
        },
        customerdetails:{
            type:Object,
            required:true
        },
        totalCost:{
            type:Number,
            required:true
        },
        products:{
            type:Array,
            required:true
        }


});

module.exports=mongoose.model('order',OrderSchema);