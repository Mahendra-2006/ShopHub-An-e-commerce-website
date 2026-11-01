import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        unique:true,
        ref:"User"
    },
    items:[
        {
            product_name:{
                type:mongoose.Schema.Types.String,
                require:true
            },
            price:{
                type:mongoose.Schema.Types.Number,
                require:true,
            }
        }
    ]
})
export const Cart = new mongoose.model("Cart",CartSchema);