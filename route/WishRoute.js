import express from "express"
import {getWish,getWishById,updateWish,createWish,deleteWish,acquired} from "../controller/WishlistController.js"

const router = express.Router()

router.get("/wish",getWish)
router.get("/wish/:id",getWishById)
router.post("/wish",createWish)
router.patch("/wish/:id",updateWish)
router.delete("/wish/:id",deleteWish)
router.patch("/wish/:id/acquired",acquired)


export default router
