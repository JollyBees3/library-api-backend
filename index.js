import express from "express";

await mongoose.connect(process.env.MONGO_URI)

const app = express();



app.listen(3000, () => {
  console.log("Port is listening");
});