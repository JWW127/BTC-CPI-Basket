import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Conn } from "./connect.js";
import BlockModel from "./models/blockModel.js";
import btcData from "./routes/btcData.js";

const app = express();
const PORT = process.env.PORT || 5555;

/* -------------------------------

this will run middleware start back-end server and connect to db

----------------------------------*/

//? middleware------------------------------
app.use(express.json({ limit: "30mb", exteneded: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", btcData);

//? connect to DB and run server ------------
Conn()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .then(() => {
    const data = BlockModel.create({ price: 27, block: 1137 });
  })
  .catch((err) => {
    console.error(err);
  });
