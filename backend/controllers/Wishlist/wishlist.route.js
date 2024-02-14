import express from "express";
import { AddtoWishlist, GetWishlistproducts } from "./wishlist.controller.js";
import { CheckHeaderToken } from "../../helpers/authHelper.js";
const app = express.Router();

app.post("/add-to-wishlist/:id", CheckHeaderToken, AddtoWishlist);
app.get("/get-wishlist-products", CheckHeaderToken, GetWishlistproducts);

export default app;
