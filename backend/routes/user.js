const express = require("express");
const router = express.Router();
const {userModel,bookingModel} = require("../db")
const zod = require("zod");
const jwt = require("jsonwebtoken")
const {authMiddleware} = require("../middleware")
const admin = require("firebase-admin")
const serviceAccountKey = require("../coffeekala-88775-firebase-adminsdk-fbsvc-10d043fdc4.json" ) 
const {getAuth} = require("firebase-admin/auth")

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
})


const signupSchema = zod.object({
    username : zod.string(),
    email : zod.string().email(),
    password : zod.string(),
})

router.post("/signup",async (req,res)=>{
    const {success} = signupSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "Invalid Inputs"
        })
    }
    const existingUser = await userModel.findOne({
        email : req.body.email
    })
    if(existingUser){
        return res.status(411).json({
            message : 'Email already taken'
        })
    }
    const user = await userModel.create({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    },process.env.JWT_SECRET)

    res.json({
        message : "User Created Successfully",
        token : token
    })

})


router.post("/google-auth",async(req,res)=>{
    let {access_token} = req.body;
    getAuth()
    .verifyIdToken(access_token)
    .then(async (decodedUser)=>{
        let { email, name } = decodedUser;
        const existingUser = await userModel.findOne({
            email : email
        }).catch(err => {
            return res.status(500).json({ "error" : err.message })
        })

        if(existingUser){
            if(!existingUser.google_auth){
                return res.status(403).json({
                    "error" : "This email was signed up without google. Please login with password to access the account"
                })
            }
        }
        else{
            const user = await userModel.create({
                username : name,
                email : email,
                google_auth : true
            })
            const userId = user._id;

            const token = jwt.sign({
                userId
            },process.env.JWT_SECRET)

            res.json({
                message : "User Created Successfully",
                token : token
            })
        }
    })
    
})

const signinSchema = zod.object({
    email : zod.string(),
    password : zod.string()
})


router.post("/signin",async(req,res)=>{
    const {success} = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : "Incorrect Inputs"
        })
    }
    const user = await userModel.findOne({
        email : req.body.email,
        password : req.body.password
    })
    if(user){
        const token = jwt.sign({
            userId : user._id
        },process.env.JWT_SECRET)
        return res.json({
            token : token
        })
    }
    res.status(411).json({
        message : "User not found"
    })
})

router.get("/coins",authMiddleware,async(req,res)=>{
    const user = await userModel.findOne({
        userId : req.userId
    })
    return res.json({
        coins : user.coins
    })
})

const updateBodySchema = zod.object({
    username : zod.string().optional(),
    password : zod.string().optional()
})

router.put("/update",authMiddleware,async(req,res)=>{
    const {success} = updateBodySchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message : "Error while uploading information"
        })
    }
    await userModel.findOne({
        _id : req.userId
    },req.body);
    res.json({
        message : "User updated successfully"
    })
})

router.get("/tables",authMiddleware,async(req,res)=>{
    const bookedTables = await bookingModel.countDocuments();
    res.json({
        availableTables : 50 - bookedTables
    });
})


router.post("/book",authMiddleware,async(req,res)=>{
    const { tableNumber , date} = req.body;

    const user = await userModel.findOne({
        _id : req.userId 
    })

    if(!user || user.coins < 100){
        return res.json({
            message : "Sorry you dont have enough coins to book a table"
        })
    }

    const existingBooking = await bookingModel.findOne({
        tableNumber , date
    })
    if(existingBooking){
        return res.status(400).json({
            message : "Table already booked for this date."
        })
    }
    const booking = await bookingModel.create({
        user : req.userId,
        tableNumber,
        date
    })
    user.coins -= 100;
    await user.save();
    res.json({
        message : "Table booked successfully",booking
    });
})



module.exports = router;