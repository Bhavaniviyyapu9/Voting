const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.post("/signup",(req,res)=>{
    res.json(["dummy msg"]);
})

app.listen(7171,()=>{
    console.log("Listening to Port 7171");
})

let connectToDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Bhavaniviyyapu:Bhavani22@clusterb.chrlct6.mongodb.net/Voting?retryWrites=true&w=majority&appName=clusterB")
        console.log("connected to mongodb successfully");
    } catch (error) {
        console.log("Unable to connect to mongodb")
    }
}

connectToDB();
