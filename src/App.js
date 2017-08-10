import React, { Component } from "react";
import { Nav, Hero, Table, Footer } from "./components";
import { getCoins, UPDATE_INTERVAL } from "./utils/API";

class App extends Component {
  state = {
    coins: [],
    isFetching: false
  };

  fetchingCoin = () => {
    getCoins().then(coins => {
      if (coins) {
        this.setState({
          coins
        });
      } else {
        this.setState({
          isFetching: true
        });
      }
    });
  };

  componentDidMount() {
    setInterval(this.fetchingCoin(), UPDATE_INTERVAL);
  }

  render() {
    const { coins, coinData, isFetching } = this.state;
    return (
      <div>
        <Nav />
        <div className="container">
          <Hero />
          <section className="container content-area">
            <Table isFetching={isFetching} coins={coins} />
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
