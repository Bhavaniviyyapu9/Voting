// step:2
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");


const storage = multer.diskStorage({
    destination:  (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })

const app = express();

app.use(cors());

let userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    aadhar:Number,
    dateOfBirth:String,
    gender:String,
    email:String,
    password:String,
    mobileNo:String,
    district:String,
    village:String,
    profilePic:String,
});

let User = new mongoose.model("user",userSchema);
// step:4

app.post("/signup",upload.array("profilePic"),async(req,res)=>{
    console.log(req.body);
    console.log(req.files);

    try {
        let newUser = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            aadhar:req.body.aadhar,
            dateOfBirth:req.body.dateOfBirth,
            gender:req.body.gender,
            email:req.body.email,
            password:req.body.password,
            mobileNo:req.body.mobileNo,
            district:req.body.district,
            village:req.body.village,
            profilePic:req.files[0].path,
        });

        await newUser.save();
        res.json({status:"success",msg:"User created successfully"});
        
    } catch (error) {
        res.json(err);
    }
   
        
})
// step:3
app.listen(7171,()=>{
    console.log("Listening to Port 7171");
})
// step:1
let connectToDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Bhavaniviyyapu:Bhavani22@clusterb.chrlct6.mongodb.net/Voting?retryWrites=true&w=majority&appName=clusterB")
        console.log("connected to mongodb successfully");
    } catch (error) {
        console.log("Unable to connect to mongodb")
    }
}

connectToDB();
