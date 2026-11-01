import {Router} from 'express'
import { User } from '../../Database/UserSchema.mjs';
import { Cart } from '../../Database/CartSchema.mjs';
const router = Router();

router.post("/api/register", async (req,res) =>{
    try{
    console.log(req.body);
    const {body} = req;
    const newUser = User(body);
    console.log(newUser);
    const savedUser = await newUser.save();
    console.log("Saved User  : "+savedUser);
    res.status(201).json(
        {
            user:savedUser,
            ok:true
        }
        );
    }
    catch(error){
        console.log(error.message);
        res.status(404).json({
            message:error.message,
            ok:false
        })
    }
})
router.post("/api/login",async (req,res) =>{
    try{
        const {body} = req;
        const loggedUser = User(body);
        const isUser = await User.findOne({email:loggedUser.email});
        req.session.user_id = isUser._id;
        res.status(200).json({
            message:"Login successful",
            ok:true
        }); 
    }
    catch(error){
        res.status(404).json({
            message:error.message,
            ok:false
        });
    }
})
router.get("/api/users", async (req,res) =>{
    const users = await User.find();
    res.status(200).send(users);
})
router.get("/api/profile",async (req,res) =>{
    try{
        const id = req.session.user_id;
        console.log(id);
        const userProfile = await User.findById(id);
        console.log(userProfile);
        res.status(200).json({
            user:userProfile,
            ok:true
        })
    }
    catch(error){
        res.status(404).json({
            message:"user profile not found.",
            ok:false
        })
    }
})
router.put("/api/update-profile", async (req,res)  =>{
    const {body} = req;
    const id = req.session.user_id;
    const update = await User.findByIdAndUpdate(id,body,{
        returnDocument:'after',
        runValidators:true
    })
    res.status(200).json({
        profile:update,
        ok:true
    })
})
router.post("/api/add-cart", async (req,res) =>{
    const {body} = req;
    console.log(body);
    const id = req.session.user_id;
    const cart = await Cart.findOne({user_id:id});
    if(cart == null){
        const newCart = Cart({user_id:id,items:[body]});
        await newCart.save();
        res.status(201).json({
            Cart:newCart,
            ok:true
        })
    }
    else{
        console.log("Already exists");
        cart.items.push(body);
        const updatedCart = await cart.save();
        console.log(updatedCart);
        res.status(200).json({
            Cart:updatedCart,
            ok:true
        })
    }
})
router.get("/api/get-cart", async (req,res) =>{
    const id = req.session.user_id;
    const carts = await Cart.findOne({user_id:id});
    res.status(200).json({
        Cart:carts,
        ok:true
    })
})
router.delete("/api/remove-cart/:id",async (req,res) =>{
    const cartId = req.params.id;
    const id = req.session.user_id;
    const cart = await Cart.findOne({user_id:id});
    const Items = cart.items
    const deleteItem = Items.filter((item) => item._id.toString() !== cartId);
    cart.items = deleteItem;
    const updatedCart = await cart.save();
    console.log("Updated Cart : "+ updatedCart);
    console.log(Items);
})
export default router;