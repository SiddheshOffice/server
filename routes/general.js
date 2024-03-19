import express from 'express';
import {getUser, getAllUser} from "../controllers/general.js";


const router = express.Router();
router.get("/user/:id", getUser);
router.get("/general/getAll", getAllUser)

export default router;