import express from "express"
import { LoginUser, RegisterUser, getAllusers, getUser } from "./user.controller.js"

const app=express.Router()


app.post(`/register`,RegisterUser)
app.post(`/login`,LoginUser)
app.get("/get-all-users",getAllusers)
app.get("/getUserById/:id",getUser)

export default app