
const userSchema=require('../Model/UserSchema');
const bcrypt=require('bcrypt');
const salt=10;

const nodemailer=require('nodemailer');

const jsonwebtoken=require('jsonwebtoken');

const register=(req,resp)=>{

    userSchema.findOne({'email':req.body.email}).then(result=>{
        if(result==null){
            
            bcrypt.hash(req.body.password,salt,function(err,hash){

                if(err){
                    resp.status(500).json(err);
                }
        
                const user=new userSchema({
                    fullname:req.body.fullname,
                    email:req.body.email,
                    password:hash,
                    activeState:true
                });
        
                const transporter= nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'rucreativedeveloper@gmail.com',
                        pass:'ivoi ptmk gunt tdcb'
                    }
                });
            
                const mailOption={
                    from:'rucreativedeveloper@gmail.com',
                    to:req.body.email,
                    subject:'New Account has been created successfully',
                    text:'You have successfully registered to our rncreationdeveloper site'
                }
            
                transporter.sendMail(mailOption,function(err,info){ 
                    if(err){
                        return resp.status(500).json({'error':err})
                    }else{
                        user.save().then(saveResponse=>{
                            resp.status(201).json({'message':'user successfully saved'});
                        }).catch(err=>{
                            resp.status(500).json(err);
                        });
                    }
                })
        
               
            })
        

        }else{
            return resp.status(409).json({'error':'account always exists!'});
        }
    })


   

}


const login=(req,resp)=>{

    userSchema.findOne({'email':req.body.email}).then(selecteduser=>{
        if(selecteduser!==null){
            //it's ok
            bcrypt.compare(req.body.password, selecteduser.password, function(err, result) {
                // result == true
                if(err){
                    return resp.status(500).json({'err':'Internal server error'});
                }else{

                    if(result){

                        const payload={
                            email:selecteduser.email
                        }
    
                        const secretkey=process.env.SECRET_KEY;
    
                        const expiresIn='24h';
    
                        const token=jsonwebtoken.sign(payload,secretkey,{expiresIn});
                        return resp.status(200).json({'token':token});
                    }else{
                        return resp.status(401).json({'message':'password is incorrect!!'});
                    }
  

                }
            });
        }else{
            return resp.status(404).json({'message':'user not found!'});
        }
    })



}

module.exports={
    register,login
}