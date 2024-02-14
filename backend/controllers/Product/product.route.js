import express from "express";
import {
  Createproduct,
  DeleteProduct,
  GetAllproduct,
  GetSingleproductDetail,
  GetallCategory,
  updateProduct,
} from "./product.controller.js";

const app = express.Router();

app.post("/create-product", Createproduct);
app.get("/get-all-products", GetAllproduct);
app.get("/get-all-category", GetallCategory);
app.get("/:id", GetSingleproductDetail);
app.put("/update-product/:id", updateProduct);
app.delete("/delete-product/:id", DeleteProduct);

export default app;
