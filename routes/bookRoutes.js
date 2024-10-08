import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/bookcontrollers.js";

const bookRouter = Router();

bookRouter.post("/post", addBook);
bookRouter.get("/getall", getAllBooks);
bookRouter.get("/get/:id", getBook);
bookRouter.patch("/update", updateBook);
bookRouter.delete("/delete", deleteBook);

export default bookRouter;
