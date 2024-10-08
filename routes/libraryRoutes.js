import {Router} from "express";
import { readAbookById } from "../controllers/libraryControllers.js";

const libraryRouter = Router();

libraryRouter.get("/", readAbookById) 

export default libraryRouter
