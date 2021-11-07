import dotenv from "dotenv";
import mongoose from "mongoose";

/* -------------------------------

this is functionality to connect to the db exported to index

----------------------------------*/

//get values from .env file
dotenv.config();

//db connection
const DB = process.env.DB;
export const Conn = () => {
  return mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};