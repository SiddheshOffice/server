import express from 'express';
import {getUser} from "../controllers/general.js";


const router = express.Router();
console.log("In general router")
router.get("/user/:id", getUser);

export default router;