import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
   cart:{
    type:Array,
    required:true
   }
  },
  { timestamps: true }
);
export default  mongoose.model("Cart",cartSchema) 
