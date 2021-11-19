import express from "express";
import rateLimit from "express-rate-limit";
import { addBlock } from "../controllers/btcControllers.js";
import { getBlock } from "../controllers/btcControllers.js";

const rate = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
});

/* -------------------------------

these are the routes that call the controllers @ btcControllers.js

----------------------------------*/

const router = express.Router();

router.get("/latest", rate, getBlock);
router.post("/", rate, addBlock);

export default router;
