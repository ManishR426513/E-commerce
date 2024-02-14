import express from "express";
import { Addtocart } from "./cart.controller.js"

const app = express.Router();


app.post("/add-to-cart",Addtocart)

export default app
