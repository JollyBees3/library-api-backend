import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getAuthor, updateAuthor, } from "../controllers/authorControllers.js";





const authorRouter = Router();

authorRouter.post("/postauthor", addAuthor);

authorRouter.get("/getauthor/:id", getAuthor);

authorRouter.get("/getallauthors", getAllAuthors);

authorRouter.patch("/updateauthor/:id", updateAuthor);

authorRouter.delete("/deleteauthor/:id", deleteAuthor);

export default authorRouter;