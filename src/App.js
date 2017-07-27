import React, { Component } from "react";
import Table from "./Table";
import Footer from "./Footer";
import {
  getCoins,
  getCoinData,
  UPDATE_INTERVAL,
  CRYPTOCOMPARE_API_URI
} from "./utils/API";
import logo from "./images/bitcoin.svg";

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
        <section className="">
          <nav className="navbar">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                <img src={logo} alt="Crypto Currency" width="112" height="35" />
                <span>Crypto Compare</span>
              </a>

              <div className="navbar-burger">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="navbar-end">
              <a className="navbar-item" href="github.com/yeondam88">
                <i className="fa fa-github" />&nbsp;Source
              </a>
            </div>
          </nav>
        </section>
        <div className="container">
          <section className="hero is-warning is-bold is-medium">
            <div className="hero-body">
              <div>
                <h1 className="title has-text-centered">Crypto Compare</h1>
                <p className="has-text-centered description">
                  This website indexes the top 10 cryptocurrencies by market cap
                  (how much the sum of all coins is collectively worth), and
                  gives you an easy way to compare cryptocurrency performance
                  and rank over the last week.
                </p>
                <p className="has-text-centered explaination">
                  This tutorial originally for{" "}
                  <span className="tag is-primary">Vue</span> from
                  <a href="https://scotch.io/tutorials/build-a-cryptocurrency-comparison-site-with-vuejs">
                    <span className="button is-small is-info">Scoth.io</span>
                  </a>
                  Made with <span className="tag is-success">React</span>
                </p>
              </div>
            </div>
          </section>
          <section className="container content-area">
            <Table isFetching={isFetching} coins={coins} coinData={coinData} />
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
