import express from "express";
import { allOrderslist, createOrder } from "./order.controller.js";
import { CheckHeaderToken } from "../../helpers/authHelper.js";

const app = express.Router();

app.post("/create-order", CheckHeaderToken, createOrder);
app.get("/get-all-orders", CheckHeaderToken, allOrderslist);

export default app;
