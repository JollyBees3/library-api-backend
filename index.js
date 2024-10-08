import express from "express";
import mongoose from "mongoose"
import authorRouter from "./routes/authorRoutes.js";

await mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(express.json())

app.use(authorRouter);

app.listen(3000, () => {
  console.log("ports are listening 3000");
});