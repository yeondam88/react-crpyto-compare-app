import React from "react";

const Hero = props =>
  <section className="hero is-warning is-bold is-medium">
    <div className="hero-body">
      <div>
        <h1 className="title has-text-centered">Crypto Compare</h1>
        <p className="has-text-centered description">
          This website indexes the top 10 cryptocurrencies by market cap (how
          much the sum of all coins is collectively worth), and gives you an
          easy way to compare cryptocurrency performance and rank over the last
          week.
        </p>
        <p className="has-text-centered explaination">
          This tutorial app originally written in <strong>Vue</strong> from
          <a href="https://scotch.io/tutorials/build-a-cryptocurrency-comparison-site-with-vuejs">
            <span className="button is-small is-info">Scotch.io</span>
          </a>
          <br />Re-write with <strong>React</strong>
        </p>
      </div>
    </div>
  </section>;

export default Hero;
