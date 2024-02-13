import expres from "express"
import userRoute from "../controllers/User/user.route.js"
import productRoute from "../controllers/Product/product.route.js"

const app=expres();

app.use("/auth",userRoute)
app.use("/product",productRoute)


export default app