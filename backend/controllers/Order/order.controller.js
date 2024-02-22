import { successResponseWithData } from "../../helpers/apiResponse.js";
import orderModel from "../../models/Order/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const {
      items,
      totalAmount,
      totalItems,
      userid,
      paymentMethod,
      paymentStatus,
      status,
      selectedAddress,
    } = req.body;

    const createOrder = await new orderModel({
      items,
      totalAmount,
      totalItems,
      userid,
      paymentMethod,
      paymentStatus,
      status,
      selectedAddress,
    }).save();

    return successResponseWithData(
      res,
      "Order Placed Sucessfully",
      createOrder
    );
  } catch (error) {
    console.log(error);
  }
};

export const allOrderslist = async (req, res) => {
  try {
    const userid = req.userid;

    console.log("dsdd", userid);

    const orderList = await orderModel.find({ userid: userid });

    console.log("orderList", orderList);
  } catch (error) {
    console.log(error);
  }
};
