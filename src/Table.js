import React from "react";

class Table extends React.Component {
  render() {
    const { isFetching, coins } = this.props;
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
            let imgUrl = require(`./images/${coin.symbol}.png`);
            return (
              <tr>
                <td>
                  {coin.rank}
                </td>
                <td>
                  <img src={imgUrl} />
                  {coin.name}
                </td>
                <td>
                  {coin.symbol}
                </td>
                <td>
                  ${coin.price_usd}
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
                  ${coin.market_cap_usd}
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
