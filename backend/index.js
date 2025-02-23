const express = require("express");
const cors = require("cors");
const app = express()
const userRouter = require("./routes/user")
const adminRouter = require("./routes/admin")

app.use(express.json());
app.use(cors());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);




app.listen(3000,()=>{
    console.log("BE running on port 3000")
})