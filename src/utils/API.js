import axios from "axios";

export let CRYPTOCOMPARE_API_URI =
  "https://cors-anywhere.herokuapp.com/https://www.cryptocompare.com";
export let COINMARKETCAP_API_URI = "https://api.coinmarketcap.com";
export let UPDATE_INTERVAL = 60 * 1000;

export async function getCoins() {
  try {
    const response = await axios.get(
      `${COINMARKETCAP_API_URI}/v1/ticker/?limit=10`
    );
    const coins = response.data;
    return coins;
  } catch (error) {
    console.error(error);
  }
}

export async function getCoinData() {
  try {
    const response = await axios.get(
      `${CRYPTOCOMPARE_API_URI}/api/data/coinlist`
    );
    const coinData = await response.data.Data;
    console.log(coinData);
    return coinData;
  } catch (error) {
    console.error(error);
  }
}
