import express from "express"
import { AddtoCart } from "./cart.route.js"
import { CheckHeaderToken } from "../../helpers/authHelper.js"

const app=express.Router()


app.post("/add-to-cart",CheckHeaderToken,AddtoCart)



