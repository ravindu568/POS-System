const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

    email:{

        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    activeState:{
        type:Boolean,
        required:true
    }

});

module.exports=mongoose.model('user',UserSchema);