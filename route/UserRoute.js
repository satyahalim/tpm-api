import {
  getUsers,
  getUsersById,
  createUser,
  login
} from "../controller/UserController.js"
import express from "express"

const router = express.Router()

router.get("/user",getUsers)
router.get("/user/:id",getUsersById)
router.post("/user",createUser)
router.post("/login",login)
export default router