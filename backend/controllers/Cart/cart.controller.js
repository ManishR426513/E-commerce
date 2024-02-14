import {
  successResponse,
  successResponseWithData,
} from "../../helpers/apiResponse.js";
import cartModel from "../../models/Cart/cart.model.js";

export const Addtocart = async (req, res) => {
  try {
    const { cart } = req.body;

    
     
    

    /*
    const allCategory = await cartModel.distinct("_id")
    console.log(allCategory);

    

    const carts = await new cartModel({
      cart,
    }).save();

    return successResponse(res, carts);
    */
    // return successResponseWithData(res,"Product is added to cart Sucessfully",cart)
  } catch (error) {
    console.log(error);
  }
};


