import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      { product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },quantity:Number },
    ],
    totalAmount: { type: Number },
    totalItems: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: {
      type: String,

      enum: ["CARD", "COD"],
      default: "CARD",
    },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    selectedAddress: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
