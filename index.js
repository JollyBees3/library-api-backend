import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/bookRoutes.js";

await mongoose.connect(process.env.MONGO_URI)

const app = express();


app.use(bookRouter)



app.listen(3000, () => {
  console.log("Port is listening");
});
