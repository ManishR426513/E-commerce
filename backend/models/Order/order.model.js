import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 }, // Assuming default quantity is 1
      },
    ],
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

/*
import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    orderItems: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 } // Assuming default quantity is 1
      }
    ],
    totalAmount: { type: Number, default: 0 },
    totalItems: { type: Number, default: 0 },
    userid: { type: Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: {
      type: String,
      enum: ["CARD", "COD"],
      default: "CARD"
    },
    paymentStatus: { type: String, default: "pending" },
    status: { type: String, default: "pending" },
    selectedAddress: {
      // Assuming selectedAddress is an object with specific fields
      addressLine1: { type: String, required: true },
      addressLine2: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true }
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

*/
