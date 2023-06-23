import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRouth.js';

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/vl/auth', authRoutes);

//rest api
app.get('/', (req,res)=> {
    res.send("<h1>Welcome to my project</h1>");
});

//port
const PORT = process.env.PORT || 8080 ;

//run listen
app.listen(PORT, () => {
    console.log('server running on ${process.env.DEV_MODE} mode on port ${PORT}');
});