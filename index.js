import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB.");
    } catch (error) {
        throw error;
    }
};

// Event listener for MongoDB disconnection
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

// Error handling middleware
app.use((err, req, res, next) => {

const app = express()
dotenv.config()

const connect  = async ()=>{
 
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    } catch (error) {
      throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})

// middleware
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

app.use((err,req,res,next)=>{

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,

        message: errorMessage,
        stack: err.stack,
    });
});

// Start the server
const PORT = 8800;
app.listen(PORT, () => {
    connect();
    console.log("Connected to Backend.");
});

        message : errorMessage,
        stack : err.stack,

    });
    
});


app.listen(8800,()=>{
    connect()
    console.log("Connected to Backend..");
});



