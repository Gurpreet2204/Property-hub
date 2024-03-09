import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import userAuth from "./routes/auth.route.js";
dotenv.config();
const app = express();
mongoose
  .connect(
    "mongodb+srv://gurs2806:Mongopass@cluster0.rif0rjt.mongodb.net/propertyhub"
  )
  .then(() => {
    console.log(`connected to mongoDb`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running in port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", userAuth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "INternal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
