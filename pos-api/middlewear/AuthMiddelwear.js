const jwt=require('jsonwebtoken');
const secretKey=process.env.SECRET_KEY;

const verifyToken=(req,resp,next)=>{
    const token =req.headers.authorization;

    if(!token){
        return resp.status(403).json({'error':'token is missing'});
    }

    jwt.verify(token,secretKey,(err,decoded)=>{

        if(err){
            return resp.status(401).json({'error':'token is invalid'});
        }

        next();

    });
}

module.exports=verifyToken;