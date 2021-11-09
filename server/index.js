import express from "express";
import cors from "cors";
import { Conn } from "./connect.js";
import BlockModel from "./models/blockModel.js";
import btcData from "./routes/btcData.js";
import getPrice from "./api/priceApi.js";

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

//? server cleanup ---------------------------------
const handleShutdown = (server) => {
  console.log("shutting down server.");
  server.close(() => {
    console.info("server closed");
    process.exit(0);
  });
};

//? connect to DB and run express server ------------

const handleDataUpdate = async () => {
  try {
    await Conn();
    console.log("connected to db");
    let serverInstance = app.listen(PORT);
    console.log(`express server running on port ${PORT}`);
    
    setTimeout(() => {
      clearInterval(apiInterval)
      console.log('stopping api calls')
      handleShutdown(serverInstance);
    }, 300000);
  } catch (err) {
    console.error(err);
  }
};

const callApi = async () => {
    let res = await getPrice();
    let usdPrice = res.BTC.quote.USD.price;
    console.log(usdPrice)
    await BlockModel.create({price: usdPrice})
    console.log(`new price ${usdPrice} added to db`)
}

handleDataUpdate()
const apiInterval = setInterval(callApi, 60000)