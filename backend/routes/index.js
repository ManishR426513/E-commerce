import expres from "express";
import userRoute from "../controllers/User/user.route.js";
import productRoute from "../controllers/Product/product.route.js";
import cartRoute from "../controllers/Cart/cart.route.js";
import wishlistRoute from "../controllers/Wishlist/wishlist.route.js"

const app = expres();

app.use("/auth", userRoute);
app.use("/product", productRoute);
app.use("/cart",cartRoute)
app.use("/wishlist",wishlistRoute)

export default app;
