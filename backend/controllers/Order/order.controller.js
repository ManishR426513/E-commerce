import { successResponseWithData } from "../../helpers/apiResponse.js";
import orderModel from "../../models/Order/order.model.js";

/*
export const createOrder=async()=>{

}
*/

export const allOrderslist = async (req, res) => {
  try {
    const userid = req.userid;

    console.log("userid", userid);

    const userorders = await orderModel.findOne({ userid: userid })
    .populate("products.product")
    //.populate("orderby")
    //.exec();
    //  .populate("orderby")
     
    console.log("orderList", userorders);
  } catch (error) {
    console.log(error);
  }
};

export const adminOrdersList = () => {};

export const createOrder = async (req, res) => {
  try {
    const {
      products,
      totalAmount,

      userid,
      paymentMethod,
      paymentStatus,
      orderStatus,
      selectedAddress,
    } = req.body;

    console.log(
      products,
      totalAmount,

      userid,
      paymentMethod,
      paymentStatus,
      orderStatus,
      selectedAddress
    );
    const createOrder = await new orderModel({
      products,
      totalAmount,
      userid,
      paymentMethod,
      paymentStatus,
      orderStatus,
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
/*
export const allOrderslist = async (req, res) => {
  try {
    const userid = req.userid;

    console.log("dsdd", userid);

    const orderList = await orderModel.find({ userid: userid });

    console.log("orderList", orderList);
    console.log(
      "orderList",
      orderList[0].items[0].productid.populate("items.products")
    );
  } catch (error) {
    console.log(error);
  }
};

export const adminOrdersList = async (req, res) => {
  try {
    const allOrderslist = await orderModel.find({}) .populate(
    "orderItems"
      //select: "fname lname profilePic",
    ) //.sort({ createdAt: -1 });
    
    console.log("allOrderslist",allOrderslist)

    //  console.log("allOrderslist",allOrderslist[0].orderItems.populate("orderItems") );

    // allOrderslist.orderItems.pos
  
    const orderList = allOrderslist.map((item) => {
      return {
        id: item._id,
        //   orderItems:item.orderItems.populate("product")
        userid: item.userid.populate("User"),
      };
    });

    console.log("orderList", orderList);

   
    return successResponseWithData(
      res,
      "Orders Fetched SucessFully",
      allOrderslist
    );
   
  } catch (error) {
    console.log(error);
  }
};
*/
