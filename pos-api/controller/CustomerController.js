const { response } = require('express');
const CustomerSchema=require('../Model/CustomerSchema');

const create=(req,resp)=>{
    const customer=new CustomerSchema({

        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });
    customer.save().then(response=>{
        resp.status(201).json({'message':'customer saved successfully'});
    }).catch(error=>{
        return resp.status(500).json(error);
    })

}
const findById=(req,resp)=>{

    CustomerSchema.findOne({'_id':req.params.id}).then(selectedObj=>{
        if(selectedObj!=null){
            return resp.status(200).json({selectedObj});
        }else{
            return resp.status(500).json({'message':'customer not found!'});
        }
    })


}
const update=async (req,resp)=>{

    const updateData= await CustomerSchema.findOneandUpdate({'_id':req.params.id},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        }
    },{new:true});

    if(updateData){
        return resp.status(200).json({'message':'record has been updated!!'});
    }else{
        return resp.status(500).json({'message':'internal server error'});
    }

}
const deleteById=async (req,resp)=>{


    const deleteData=await CustomerSchema.findByIdAndDelete({'_id':req.params.id});

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

        const skip=(pageNumber-1) * pageSize;

       CustomerSchema.find(query).limit(pageSize).skip(skip).then(response=>{
        return resp.status(200).json(response);
       });

        

    }catch(error){
        console.log(error);
        return resp.status(500).json({'message':'Internal Server error'});
    }

}

module.exports={
    create,findById,update,deleteById,findAll
}