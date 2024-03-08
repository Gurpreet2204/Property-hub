import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
dotenv.config();
const app = express();
mongoose.connect("mongodb+srv://gur2204s:VYpF4sA2cWyuI6uP@propertyhub.5gz5vji.mongodb.net/?retryWrites=true&w=majority&appName=propertyHub").then(() => {
  console.log(`connected to mongoDb`);
}).catch((err)=>{
console.log(err);
})
app.listen(3000, () => {
  console.log("Server is running in port 3000!");
});

app.use("/api/user", userRouter)

