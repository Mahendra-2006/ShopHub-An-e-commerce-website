import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    user_name:{
        type:mongoose.Schema.Types.String,
        required:true,
        validate:{
            validator:value => value.length > 0,
            message:"email must not be empty."
        },
    },
    email:{
        type:mongoose.Schema.Types.String,
        required:true,
        validate:{
            validator:value => value.length > 0,
            message:"email must not be empty."
        },
        unique:true
    },
    password:{
        type:mongoose.Schema.Types.String,
        required:[true,"password must not be empty."],
        maxLength:[72,"password must be below 72 characters."],
        minLength:[8,"password must be atleast 8 characters."]
    },
    phone_number:{
        type:mongoose.Schema.Types.String,
        required:true,
        validate:{
            validator:value => /^\d{10}$/.test(value),
            message:"email must not be empty."
        },
        maxLength:[10,"password must be 10 characters."],
        unique:true
    }
});
export const User = mongoose.model("User",UserSchema);