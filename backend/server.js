const express=require('express');
const connectDB=require('./config/db')
const dotenv=require('dotenv');
dotenv.config({path:"./config.env"});
const PORT = process.env.PORT || 1121;

const app=express();

// Database
connectDB();


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})


