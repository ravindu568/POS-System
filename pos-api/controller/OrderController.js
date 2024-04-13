const { response } = require('express');
const OrderSchema=require('../Model/OrderSchemaa');

const create=(req,resp)=>{

    const order=new OrderSchema({

            date:req.body.date,
            customerdetails:req.body.customerdetails,
            totalCost:req.body.totalCost,
            products:req.body.products

        });
        order.save().then(response=>{

                resp.status(201).json({'message':'order successfully saved!'});

        }).catch(error=>{
                return resp.status(500).json(error);
        })

}
const findById=(req,resp)=>{

    OrderSchema.findOne({'_id':req.params.id}).them(selectedObj=>{
        if(selectedObj!=null){
            return resp.status(200).json({'data':selectedObj});
        }else{
            return resp.status(500).json({'message':'order not found!'});
        }
    })

}
const update=async (req,resp)=>{

    
    const updateData= await OrderSchema.findOneAndUpdate({'_id':req.params.id},{
        $set:{
           
            date:req.body.date,
            customerdetails:req.body.customerdetails,
            totalCost:req.body.totalCost,
            products:req.body.products
        }
    },{new:true});

    if(updateData){
        return resp.status(200).json({'message':'record has been updated!!'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }



}
const deleteById=async (req,resp)=>{

    const deleteData=await OrderSchema.findByIdAndDelete({'_id':req.params.id});

    if(deleteData){
        return resp.status(204).json({'message':'deleted'});
    }else{
        return resp.status(500).json({'message':'Internal server error'});
    }

}
const findAll=(req,resp)=>{

    try{

        const {searchText,page=1,size=10}=req.query;

        const pageNumber=parseInt(page);
        const pageSize=parseInt(size);

        const query={};

        if(searchText){
            query.$text={$search:searchText}
        }

        const skip=(pageNumber-1)*pageSize;

        const data=OrderSchema.find(query).limit(pageSize).skip(skip).then(response=>{
            return resp.status(200).json(response);
        });


    }catch(error){
        return resp.status(500).json({'message':'Internal Server error'});
    }

}

module.exports={
    create,findById,update,deleteById,findAll
}