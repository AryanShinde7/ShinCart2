import mongoose from "mongoose";

const SigninSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },

})

const Signin = mongoose.model("Siginins",SigninSchema);

export default Signin