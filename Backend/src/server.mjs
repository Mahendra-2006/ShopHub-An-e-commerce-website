import express from 'express'
import router from './Routes/routes.mjs';
import mongoose from 'mongoose';
import cors from 'cors'
import session from 'express-session';
import MongoStore from 'connect-mongo'
const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
mongoose.connect("mongodb://localhost/e-commerce")
.then(() => console.log("DB connected successfully."))
.catch((err) =>console.log(err));
app.use(session({
    secret:"a_long_string",
    saveUninitialized:false,
    resave:false,
    store:MongoStore.create({
        mongoUrl:"mongodb://localhost/e-commerce",
        collectionName:"sessions"
    }),
    cookie:{
        maxAge: 60000 * 60
    }
}))
app.use(router);
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`server is running at port ${PORT}.`);
})