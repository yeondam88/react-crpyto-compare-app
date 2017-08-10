import React from "react";
import { getCoinData, CRYPTOCOMPARE_API_URI } from "../utils/API";

class Table extends React.Component {
  state = {
    coinData: {}
  };

  componentDidMount() {
    getCoinData().then(coinData => {
      this.setState(state => ({ coinData }));
    });
  }

  getImgUrl = symbol => {
    if (this.state.coinData[symbol]) {
      return this.state.coinData[symbol].ImageUrl;
    } else {
      return null;
    }
  };

  getCoinUrl = symbol => {
    if (this.state.coinData[symbol]) {
      return this.state.coinData[symbol].Url;
    } else {
      return null;
    }
  };

  render() {
    const { isFetching, coins } = this.props;
    const { coinData } = this.state;
    if (isFetching) {
      return <h1>Loading...</h1>;
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>1H</th>
            <th>1D</th>
            <th>1W</th>
            <th>Market Cap (USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => {
            const imgUrl = `${CRYPTOCOMPARE_API_URI}${this.getImgUrl(
              coin.symbol
            )}`;
            const coinUrl = `${CRYPTOCOMPARE_API_URI}${this.getCoinUrl(
              coin.symbol
            )}`;
            return (
              <tr>
                <td>
                  {coin.rank}
                </td>
                <td>
                  <img src={imgUrl} />
                  <a style={{ color: "#000" }} href={coinUrl} target="_blank">
                    {coin.name}
                  </a>
                </td>
                <td>
                  {coin.symbol}
                </td>
                <td>
                  ${parseFloat(coin.price_usd).toFixed(2)}
                </td>
                <td
                  style={
                    coin.percent_change_1h > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {coin.percent_change_1h > 0
                    ? "+" + coin.percent_change_1h
                    : coin.percent_change_1h}%
                </td>
                <td
                  style={
                    coin.percent_change_24h > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {coin.percent_change_24h > 0
                    ? "+" + coin.percent_change_24h
                    : coin.percent_change_24h}%
                </td>
                <td
                  style={
                    coin.percent_change_7d > 0
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {coin.percent_change_7d > 0
                    ? "+" + coin.percent_change_7d
                    : coin.percent_change_7d}%
                </td>
                <td>
                  ${parseInt(coin.market_cap_usd).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
