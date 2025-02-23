const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(error){
        console.log("There was a problem connecting to the database : "+ error)
    }
}

dbConnection();

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        lowercase : true,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : String,
    google_auth : {
        type : Boolean,
        default : false
    }
})

const userModel = mongoose.model("users",userSchema);

export default userModel;