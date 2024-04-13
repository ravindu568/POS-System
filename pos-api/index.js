const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const cors=require('cors');

const bodyParser=require('body-parser');
const port=process.env.SERVER_PORT | 3000;
const userRoute=require('./Routes/UserRoute');
// const orderRoute=require('./Routes/OrderRoute');
const productRoute=require('./Routes/ProductRoute');
const customerRoute=require('./Routes/CustomerRoute');

const app=express(); 

app.use(cors());





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

try{
   mongoose.connect('mongodb://127.0.0.1:27017/posapi');
   app.listen(port,()=>{
    console.log(`SERVER IS STARTING AND RUNNING ON ${port}`);
   })

}catch(e){

    console.log(e);
}


//for check server whether it works or not

app.get('/test-api',(req,resp)=>{
    return resp.json({'message':'SERVER STARTED!'});
})

app.use('/api/v1/users',userRoute);  
// app.use('/api/v1/orders',orderRoute);  
app.use('/api/v1/products',productRoute);  
app.use('/api/v1/customers',customerRoute);  
