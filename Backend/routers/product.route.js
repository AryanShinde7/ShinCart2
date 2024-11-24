import express from "express"
import { addProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


router.post("/" , addProduct)

router.put("/:id" , updateProduct)

router.get("/", getAllProduct)

router.delete("/:id" , deleteProduct)

export default router;
