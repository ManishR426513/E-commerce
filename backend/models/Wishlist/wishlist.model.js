import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    wishlistJobs: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);
export default  mongoose.model("Wishlists",wishlistSchema) 
