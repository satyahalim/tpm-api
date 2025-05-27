import express from "express"
import cors from "cors"
import WishRoute from "./route/WishRoute.js"
import UserRoute from "./route/UserRoute.js"
const app = express()
app.use(cors())
app.use(express.json())
app.use(WishRoute)
app.use(UserRoute)
app.listen(5000,()=>console.log("server is working on server 5000"))