import express from "express";
import mongoose from "mongoose";
import authorRouter from "./routes/authorRoutes.js";
import bookRouter from "./routes/bookRoutes.js";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";

await mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cors());

app.use(authorRouter);
app.use(bookRouter);
app.use(userRouter)

app.listen(3000, () => {
  console.log("ports are listening 3000");
});
