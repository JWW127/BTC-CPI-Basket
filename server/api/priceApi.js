import axios from "axios";

/* -------------------------------

this file calls the coinmarketcap api and gets the price

----------------------------------*/


const requestOptions = {
  headers: {
    "X-CMC_PRO_API_KEY": "xxxx-xxxx-xxxx-xxxx", 
  },
  qs: {
    start: "1",
    limit: "1",
    convert: "USD",
  },
  json: true,
};

const getPrice = async () => {
  try {
    const btcResObj = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC",
      requestOptions
    );
        return btcResObj.data.data //obj has weird shape has nested keys with same namespace
  } catch (err) {
    console.error(err);
  }
};
let res = await getPrice()
let usdPrice = res.BTC.quote.USD.price //! returned as a number needs to be rounded

console.log(usdPrice)
export default usdPrice