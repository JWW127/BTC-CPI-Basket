import express from "express";
import { addBlock } from "../controllers/btcControllers.js";
import { getBlock } from "../controllers/btcControllers.js";

/* -------------------------------

these are the routes that call the controllers @ btcControllers.js

----------------------------------*/

const router = express.Router();

router.get("/latest", getBlock);
router.post("/", addBlock);

export default router;
