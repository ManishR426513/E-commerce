import expres from "express"
import userRoute from "../controllers/User/user.route.js"
import productRoute from "../controllers/Product/product.route.js"
import wishlistRoute from "../controllers/Wishlist/wishlist.route.js"
import cartRoute from "../controllers/Cart/cart.route.js"
const app=expres();

app.use("/auth",userRoute)
app.use("/product",productRoute)
app.use("/wishlist",wishlistRoute)
app.use('/cart',cartRoute)



export default app