import express from 'express'
import mongoose from 'mongoose'
const app = express();
mongoose.connect("")
app.listen(3000, () => {
  console.log("Server is running in port 3000!");
});
