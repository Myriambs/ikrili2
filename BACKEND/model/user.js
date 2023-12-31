const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    lastName:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    },
      photo:{
        type:String,
    },
    
    role:{
type:String,
default:"user"
    }

}) 

module.exports = mongoose.model('userSchema',userSchema)