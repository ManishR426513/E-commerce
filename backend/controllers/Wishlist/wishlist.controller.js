import express from "express";
import wishlistModel from "../../models/Wishlist/wishlist.model.js";
import { successResponseWithData } from "../../helpers/apiResponse.js";
import productModel from "../../models/Product/product.model.js";

export const AddtoWishlist = async (req, res) => {
  try {
    const userId = req._id._id;
    const wishlistJobId = req.params.id;
    console.log("nnew ", userId);

    const checkuserId = await wishlistModel.find({ userId: userId });

    console.log("sdsd", checkuserId);

    if (checkuserId == "[]") {
      const wishlist = await new wishlistModel({
        userId,
        wishlistJobs: wishlistJobId,
      }).save();

      return successResponseWithData(
        res,
        "Product Added to Wishlist",
        wishlist
      );
    } else {
      const updatedWishlist = await wishlistModel.findOneAndUpdate(
        { userId: userId },
        { $addToSet: { wishlistJobs: wishlistJobId } }, // Add wishlistJobId to wishlistJobs array
        { new: true, upsert: true } // Returns the updated document and creates a new one if not found
      );

      return successResponseWithData(
        res,
        "Product added to wishlist  Sucessfully",
        updatedWishlist
      );
    }
  } catch (error) {}
};

export const GetWishlistproducts = async (req, res) => {
  try {
    const userId = req._id._id;
    console.log(userId);
    const products = await cart.find({ userId: userId });
    console.log("sds",products);
  } catch (error) {
    console.log(error)
  }
};
