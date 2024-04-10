import express from "express";
import { getSales } from "../controllers/sales";

const salesRoutes = express.Router();
salesRoutes.get("/sales", getSales);

export default salesRoutes;
