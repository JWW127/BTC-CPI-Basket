import axios from "axios";

const requestOptions2 = {
  headers: {
    "X-CMC_PRO_API_KEY": "replace with your api token",
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
