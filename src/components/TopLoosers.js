import React from "react";
import { useState, useEffect } from "react";
import CoinLoosers from "./CoinLoosers";
import "../styles/TopLoosers.css";

function TopLoosers({ response, loading, error }) {
  // asigining variables

  // useState
  const [topLoosers, settopLoosers] = useState([]);
  const [selectedCoinId, setSelectedCoinId] = useState(null);

  //click handler
  function handleCoinClick(coinId) {
    setSelectedCoinId(coinId);
  }

  useEffect(() => {
    const fetchingSortedCoins = async () => {
      if (response) {
        const sortedCoins = await response.sort(
          (b, a) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        const topSixLoosers = sortedCoins.slice(0, 6)
        settopLoosers(topSixLoosers);

        if (topSixLoosers && topSixLoosers.length > 0) {
          setSelectedCoinId(topSixLoosers[0].id);
        }
      }
      
    };
    fetchingSortedCoins();
  }, [response, loading]);

  return (
    <div className="TopLoosers-mainContainer">
      <h4>Top Loosers</h4>
      <div id="trending-card-flexContainer">
      {topLoosers &&
        topLoosers.map((coinL) => (
          <div
            className={`card-container ${
              selectedCoinId !== coinL.id ? "unpickedCoinId" : ""
            } ${selectedCoinId === coinL.id ? "selected-coin" : ""}`}
            key={coinL.id}
            onClick={() => handleCoinClick(coinL.id)}
          >
            <CoinLoosers coinL={coinL} />
          </div>
        ))}
        </div>
    </div>
  );
}

export default TopLoosers;
