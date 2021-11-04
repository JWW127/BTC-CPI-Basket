import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Conn, PORT } from "./connect";

const app = express();

//? middleware--------------------------
app.use(express.json({ limit: "30mb", exteneded: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//! we can add routes here after we make them


Conn().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
  })
})
.catch((err) => {
  console.error(err)
})