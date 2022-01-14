import axios from "axios";

const requestOptions2 = {
  headers: {
    "X-CMC_PRO_API_KEY": "f8525b49-4d99-4e08-816d-ab7a01456729",
  },
  qs: {
    start: "1",
    limit: "1",
  },
  json: true,
};

//! you have to have coinmarketcap premium account for this request
const getBlock = async () => {
  try {
    const btcStatsResObj = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/blockchain/statistics/latest?symbol=BTC",
      requestOptions2
    );
    return btcStatsResObj.data.data;
  } catch (err) {
    console.error(err);
  }
};

let res = await getBlock();
console.log(res);

export default getBlock;
