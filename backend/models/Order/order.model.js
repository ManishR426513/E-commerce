import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: { type: [Schema.Types.Mixed], ref: "products", required: true },
    totalAmount: { type: Number },
    totalItems: { type: Number },
    userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
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
